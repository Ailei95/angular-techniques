import {TestBed} from '@angular/core/testing';

import {JsonPlaceholderApiService} from './json-placeholder-api.service';
import {HttpClientModule} from '@angular/common/http';

describe('JsonPlaceholderApiService', () => {
  let service: JsonPlaceholderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [JsonPlaceholderApiService]
    });
    service = TestBed.inject(JsonPlaceholderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
