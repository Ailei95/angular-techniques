import {TestBed} from '@angular/core/testing';

import {JsonPlaceholderApiInterceptorService} from './json-placeholder-api-interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('JsonPlaceholderApiInterceptorService', () => {
  let service: JsonPlaceholderApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [JsonPlaceholderApiInterceptorService]
    });
    service = TestBed.inject(JsonPlaceholderApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
