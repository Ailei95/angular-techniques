import {TestBed} from '@angular/core/testing';

import {ProxyApiService} from './proxy-api.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProxyApiService', () => {
  let service: ProxyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [ProxyApiService]
    });
    service = TestBed.inject(ProxyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
