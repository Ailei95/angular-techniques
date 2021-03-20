import {AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable, Subscription} from 'rxjs';
// import {WebSocketMsgService} from '../socket/web-socket-msg.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

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

  constructor(
    private proxyApiService: ProxyApiService,
    // public webSocketMsgService: WebSocketMsgService,
    private rxStompService: RxStompService
  ) { }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();

    this.sub = this.rxStompService.watch('api/message').subscribe((message: Message) => {
      this.receivedMessages.push(JSON.stringify(
        {
          ...JSON.parse(message.body),
          'message-id': message.headers['message-id']
        }));
    });
  }

  sendMessage(): void {
    if (this.msgRef.nativeElement.value.length > 0) {
      // this.webSocketMsgService.sendMessage(this.msgRef.nativeElement.value);
      this.rxStompService.publish({
        destination: 'api/send/message',
        body: JSON.stringify({
          message: this.msgRef.nativeElement.value,
          timestamp: new Date().getTime()
        })
      });
      this.msgRef.nativeElement.value = '';
    }
  }

  ngAfterViewChecked(): void {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.rxStompService.deactivate().then(() => null);
  }
}
