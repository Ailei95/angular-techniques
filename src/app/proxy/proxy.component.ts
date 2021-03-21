import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable, Subscription} from 'rxjs';
// import {WebSocketMsgService} from '../socket/web-socket-msg.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import {IMessage} from '@stomp/stompjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit, AfterViewChecked, OnDestroy {

  hello$: Observable<JSON>;

  @ViewChild('msgRef') msgRef: ElementRef;
  @ViewChild('content') content: ElementRef;

  msg: string;
  receivedMessages: string[] = [];

  sub: Subscription;

  users$: Observable<string>;

  constructor(
    private proxyApiService: ProxyApiService,
    // public webSocketMsgService: WebSocketMsgService, // Deprecate
    private rxStompService: RxStompService
  ) {
    // this.rxStompService.activate();

    this.sub = this.rxStompService.watch('/api/message').subscribe((message: IMessage) => {
      this.receivedMessages.push(JSON.stringify(
        {
          ...JSON.parse(message.body),
          'message-id': message.headers['message-id']
        }));
    });

    this.users$ = this.rxStompService.watch('/api/users')
      .pipe(map((message: IMessage) => JSON.stringify(message.body)));
  }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();
  }

  sendMessage(): void {
    if (this.msgRef.nativeElement.value.length > 0) {
      this.rxStompService.publish({
        destination: '/api/send/message',
        body: JSON.stringify({
          message: this.msgRef.nativeElement.value
        })
      });

      this.rxStompService.publish({
        destination: '/api/fetch/users',
        body: JSON.stringify({})
      });

      this.msgRef.nativeElement.value = '';
    }
  }

  ngAfterViewChecked(): void {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    // this.rxStompService.deactivate().then(() => null);
  }
}
