import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import { generateMatrix, resetMatrix, cpuMultiplyMatrix, gpuMultiplyMatrix } from '../store/matrix.actions';
import {getMatrixState, getCpuTime, getGpuTime, getMatrixA, getMatrixB, getMatrixResult, getMatrixSize} from '../store/matrix.selectors';

@Component({
  selector: 'app-gpu-home',
  templateUrl: './gpu-home.component.html',
  styleUrls: ['./gpu-home.component.css']
})
export class GpuHomeComponent implements OnInit, OnDestroy {

  cpuTime$: Observable<number>;
  gpuTime$: Observable<number>;
  matrixSize$: Observable<number>;
  matrixA$: Observable<Array<Array<number>>>;
  matrixB$: Observable<Array<Array<number>>>;
  matrixResult$: Observable<Array<Array<number>>>;

  constructor(
    private store: Store<{ matrix: Array<Array<number>> }>
  ) {
    this.cpuTime$ = this.store.pipe(select(getCpuTime));
    this.gpuTime$ = this.store.pipe(select(getGpuTime));
    this.matrixSize$ = this.store.pipe(select(getMatrixSize));
    this.matrixA$ = this.store.pipe(select(getMatrixA));
    this.matrixB$ = this.store.pipe(select(getMatrixB));
    this.matrixResult$ = this.store.pipe(select(getMatrixResult));
  }

  ngOnInit(): void {

  }

  changeDetection(): void {
    console.log('change');
  }

  generateMatrices(matrixSize: string): void {
    // tslint:disable-next-line:radix
    this.store.dispatch(generateMatrix({matrixSize: parseInt(matrixSize)}));
  }

  cpuMultiplyMatrix(): void {
    this.store.dispatch(cpuMultiplyMatrix());
  }

  gpuMultiplyMatrix(): void {
    this.store.dispatch(gpuMultiplyMatrix());
  }

  clear(): void {
    this.store.dispatch(resetMatrix());
  }

  ngOnDestroy(): void {
  }
}
