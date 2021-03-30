import {TestBed} from '@angular/core/testing';

import {JsonPlaceholderApiInterceptorService} from './json-placeholder-api-interceptor.service';

describe('JsonPlaceholderApiInterceptorService', () => {
  let service: JsonPlaceholderApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
