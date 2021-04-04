import {TestBed} from '@angular/core/testing';

import {PendingChangesGuard} from './pending-changes-guard';

describe('PendingChangesGuard', () => {
  let service: PendingChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [PendingChangesGuard]});
    service = TestBed.inject(PendingChangesGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
