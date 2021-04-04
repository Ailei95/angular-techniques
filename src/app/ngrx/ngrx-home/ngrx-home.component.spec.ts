import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgrxHomeComponent} from './ngrx-home.component';
import {StoreModule} from '@ngrx/store';

describe('NgrxHomeComponent', () => {
  let component: NgrxHomeComponent;
  let fixture: ComponentFixture<NgrxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle StoreModule dependency
      imports: [StoreModule.forRoot({})],
      declarations: [NgrxHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
