import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuHomeComponent } from './gpu-home.component';

describe('GpuHomeComponent', () => {
  let component: GpuHomeComponent;
  let fixture: ComponentFixture<GpuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
