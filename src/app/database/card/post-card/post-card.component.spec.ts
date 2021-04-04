import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostCardComponent} from './post-card.component';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {HttpClientModule} from '@angular/common/http';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [JsonPlaceholderApiService],
      declarations: [PostCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
