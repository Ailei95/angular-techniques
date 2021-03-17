import { Component, OnInit } from '@angular/core';
import {ProxyApiService} from './proxy-services/proxy-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {

  hello$: Observable<JSON>;

  constructor(
    private proxyApiService: ProxyApiService
  ) { }

  ngOnInit(): void {
    this.hello$ = this.proxyApiService.getHello();
  }

}
