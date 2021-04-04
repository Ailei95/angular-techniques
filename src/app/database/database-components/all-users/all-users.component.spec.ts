import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllUsersComponent} from './all-users.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {StoreModule} from '@ngrx/store';

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      // TODO Handle StoreModule dependency
      imports: [HttpClientModule, StoreModule.forRoot({})],
      providers: [
        JsonPlaceholderApiService,
        {provide: ActivatedRoute, useValue: {queryParams: of(null)}}
      ],
      declarations: [AllUsersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
