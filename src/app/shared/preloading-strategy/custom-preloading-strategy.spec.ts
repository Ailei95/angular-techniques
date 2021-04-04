import {TestBed} from '@angular/core/testing';

import {CustomPreloadingStrategy} from './custom-preloading-strategy';
import {RouterModule} from '@angular/router';

describe('CustomPreloadingStrategy', () => {
  let service: CustomPreloadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [CustomPreloadingStrategy]
    });
    service = TestBed.inject(CustomPreloadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
