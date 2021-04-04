import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllAlbumsComponent} from './all-albums.component';
import {HttpClientModule} from '@angular/common/http';
import {JsonPlaceholderApiService} from '../../database-services/json-placeholder-api.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('AllAlbumsComponent', () => {
  let component: AllAlbumsComponent;
  let fixture: ComponentFixture<AllAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [
        JsonPlaceholderApiService,
        {provide: ActivatedRoute, useValue: { queryParams: of(null)}}
      ],
      declarations: [AllAlbumsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
