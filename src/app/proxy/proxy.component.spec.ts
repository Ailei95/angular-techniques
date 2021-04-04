import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProxyComponent} from './proxy.component';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {RxStompService} from '@stomp/ng2-stompjs';
import {ChangeDetectorRef} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

describe('ProxyComponent', () => {
  let component: ProxyComponent;
  let fixture: ComponentFixture<ProxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // TODO Handle component with multiple dependencies recursively
      imports: [HttpClientModule],
      providers: [ProxyApiService, RxStompService, ChangeDetectorRef],
      declarations: [ProxyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
