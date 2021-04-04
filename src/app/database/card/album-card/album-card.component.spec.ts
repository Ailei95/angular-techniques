import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlbumCardComponent} from './album-card.component';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {HttpClientModule} from '@angular/common/http';

describe('AlbumCardComponent', () => {
  let component: AlbumCardComponent;
  let fixture: ComponentFixture<AlbumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [JsonPlaceholderApiService],
      declarations: [AlbumCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
