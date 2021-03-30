import {InjectableRxStompConfig} from '@stomp/ng2-stompjs';
import {environment} from 'src/environments/environment';

export const rxStompConfig: InjectableRxStompConfig = {
  brokerURL: environment.ws + '/api/socket',
  connectHeaders: {
    session: 'guest'
  },
  heartbeatIncoming: 0,
  heartbeatOutgoing: 20000,
  reconnectDelay: 500, /*
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  }*/
};
