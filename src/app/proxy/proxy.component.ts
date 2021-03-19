import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable} from 'rxjs';
// import {WebSocketMsgService} from './proxy-services/web-socket-msg.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit, AfterViewChecked {

  hello$: Observable<JSON>;

  @ViewChild('msgRef') msgRef: ElementRef;
  @ViewChild('content') content: ElementRef;

  msg: string;
  receivedMessages: string[] = [];

  constructor(
    private proxyApiService: ProxyApiService,
    // public webSocketMsgService: WebSocketMsgService,
    private rxStompService: RxStompService
  ) { }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();

    this.rxStompService.watch('api/message').subscribe((message: Message) => {
      this.receivedMessages.push(message.body);
    });
  }

  sendMessage(): void {
    if (this.msgRef.nativeElement.value.length > 0) {
      // this.webSocketMsgService.sendMessage(this.msgRef.nativeElement.value);
      this.rxStompService.publish({
        destination: 'api/send/message',
        body: JSON.stringify({message: this.msgRef.nativeElement.value})
      });
      this.msgRef.nativeElement.value = '';
    }
  }

  ngAfterViewChecked(): void {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }
}
