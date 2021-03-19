import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// TODO Delete dependencies in angular.json and assets/js
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class WebSocketMsgService {
  // Deprecate
  public stompClient;
  public msg = [];

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const serverUrl = environment.url + 'api/socket';
    const ws = new SockJS(serverUrl);

    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({
      session: 'guest',
      heartbeatIncoming: 0,
      heartbeatOutgoing: 20000,
      reconnectDelay: 500
    }, () => {
      this.stompClient.subscribe('api/message', (message) => {
        if (message.body) {
          this.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message): void {
    this.stompClient.send('api/send/message' , {}, JSON.stringify({message}));
  }
}
