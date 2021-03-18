import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class WebSocketMsgService {

  public stompClient;
  public msg = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const serverUrl = environment.url + 'socket';
    const ws = new SockJS(serverUrl);

    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({
      session: 'guest',
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      reconnectDelay: 500
    }, () => {
      this.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          this.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message): void {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
