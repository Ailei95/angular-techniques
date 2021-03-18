import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable} from 'rxjs';
import {WebSocketMsgService} from './proxy-services/web-socket-msg.service';

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

  constructor(
    private proxyApiService: ProxyApiService,
    public webSocketMsgService: WebSocketMsgService
  ) { }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();
  }

  sendMessage(): void {
    if (this.msgRef.nativeElement.value.length > 0) {
      this.webSocketMsgService.sendMessage(this.msgRef.nativeElement.value);
      this.msgRef.nativeElement.value = '';
    }
  }

  ngAfterViewChecked(): void {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }
}
