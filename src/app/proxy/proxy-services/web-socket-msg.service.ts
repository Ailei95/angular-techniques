import { Injectable } from '@angular/core';

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
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);

    console.log(ws);

    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, (frame) => {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  sendMessage(message): void {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
