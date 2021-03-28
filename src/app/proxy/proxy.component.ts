import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable, of} from 'rxjs';
// import {WebSocketMsgService} from '../socket/web-socket-msg.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import {IMessage} from '@stomp/stompjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment'

declare var Peer: any;

export interface Message {
  from: string;
  to: string;
  text: string;
  timestamp?: number;
  messageId?: string;
}

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProxyComponent implements OnInit, AfterViewChecked, OnDestroy {

  hello$: Observable<string>;

  @ViewChild('msgRef') msgRef: ElementRef;
  @ViewChild('content') content: ElementRef;

  serverHeader$: Observable<any>;

  lastMessage$: Observable<string>;
  receivedMessages$: Observable<string[]> = of([]);

  users$: Observable<string[]>;

  @ViewChild('locale') locale: ElementRef;
  localStream: MediaStream;

  video = true;
  audio = true;

  constructor(
    private proxyApiService: ProxyApiService,
    // public webSocketMsgService: WebSocketMsgService, // Deprecate
    private rxStompService: RxStompService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
/*
    this.sub = this.rxStompService.watch('/api/message').subscribe((message: IMessage) => {
      this.receivedMessages$ = this.receivedMessages$.pipe(
        map((messages: string[]) => [...messages, JSON.stringify({
            ...JSON.parse(message.body), 'message-id': message.headers['message-id']
          })])
      );
    });
*/
    this.serverHeader$ = this.rxStompService.serverHeaders$;

    // Not necessary to unsubscribe
    this.lastMessage$ = this.rxStompService.watch('/api/message')
      .pipe(map((message: IMessage) => {
        this.receivedMessages$ = this.receivedMessages$.pipe(
          map((messages: string[]) => [...messages, JSON.stringify({
            ...JSON.parse(message.body), messageId: message.headers['message-id']
          })])
        );
        return JSON.stringify({
          ...JSON.parse(message.body), messageId: message.headers['message-id']
        } as Message);
      }));

    this.users$ = this.rxStompService.watch('/api/users')
      .pipe(map((message: IMessage) => JSON.parse(message.body)));
  }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();

    const peer = new Peer('pick-an-id', { host: environment.url, port: environment.port, path: '/' });

    const conn = peer.connect('another-peers-id');
    conn.on('open', () => {
      conn.send('hi!');
    });
  }

  start(): void {
    this._startLocalStream().then(() => {
      this.locale.nativeElement.srcObject = this.localStream;
      this.set(this.video, this.audio);
      this.locale.nativeElement.play();
      this.changeDetectorRef.detectChanges();
    });
  }

  stop(): void {
    this.localStream.getTracks().forEach((track) => track.stop());
    this.localStream = null;
  }

  set(video: boolean, audio: boolean): void {
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => {
        if (track.kind === 'video') { track.enabled = video; }
        else if (track.kind === 'audio') { track.enabled = audio; }
      });
    }
  }

  send(): void {
    if (this.msgRef.nativeElement.value.length > 0) {
      this.rxStompService.publish({
        destination: '/api/send/message',
        body: JSON.stringify({
          from: null,
          to: null,
          text: this.msgRef.nativeElement.value
        } as Message)
      });

      this.msgRef.nativeElement.value = '';
    }
  }

  ngAfterViewChecked(): void {
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  ngOnDestroy(): void {
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
    }
  }

  private async _startLocalStream(): Promise<void> {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
  }
}
