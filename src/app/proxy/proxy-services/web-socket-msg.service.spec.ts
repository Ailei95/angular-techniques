import { TestBed } from '@angular/core/testing';

import { WebSocketMsgService } from './web-socket-msg.service';

describe('WebSocketMsgService', () => {
  let service: WebSocketMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebSocketMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
