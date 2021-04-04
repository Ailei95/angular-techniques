import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllPostsComponent} from './all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('AllPostsComponent', () => {
  let component: AllPostsComponent;
  let fixture: ComponentFixture<AllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [
        JsonPlaceholderApiService,
        {provide: ActivatedRoute, useValue: { queryParams: of(null)}}
      ],
      declarations: [AllPostsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
