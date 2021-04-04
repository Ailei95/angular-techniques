import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

// import * as SockJS from 'src/assets/js/sockjs.min';
// import * as Stomp from 'src/assets/js/stomp.min';

// TODO Delete dependencies in angular.json and assets/js
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class WebSocketMsgService {
  // ****************************** Deprecate *********************************** //
  public stompClient;
  public msg = [];

  public sessionId;
  public username;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const ws = new SockJS(environment.url + '/api/socket');

    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/user/queue/reply', (message) => {
        console.log(message);
      });
    });
  }

  sendMessage(message): void {
    this.stompClient.send('/api/secured/room', {}, JSON.stringify(message));
  }
}
