import {Component, OnInit} from '@angular/core';
import {GPU} from 'gpu.js';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-gpu-home',
  templateUrl: './gpu-home.component.html',
  styleUrls: ['./gpu-home.component.css']
})
export class GpuHomeComponent implements OnInit {

  gpu: GPU;

  matrixSize = new FormControl();

  matrixA: Array<Array<number>>;
  matrixB: Array<Array<number>>;

  matrixA$: Subject<Array<Array<number>>> = new Subject();
  matrixB$: Subject<Array<Array<number>>> = new Subject();

  matrixResult$: Subject<Array<Array<number>>> = new Subject();

  readonly = false;

  cpuTime: number;
  gpuTime: number;

  constructor() {
    this.gpu = new GPU();
  }

  ngOnInit(): void {
  }

  generateMatrices(): void {
    this.matrixA = [];
    this.matrixB = [];

    for (let y = 0; y < this.matrixSize.value; y++) {
      this.matrixA.push([]);
      this.matrixB.push([]);
      for (let x = 0; x < this.matrixSize.value; x++) {
        this.matrixA[y].push(Math.floor((Math.random() * 100)));
        this.matrixB[y].push(Math.floor((Math.random() * 100)));
      }
    }

    this.readonly = true;

    this.matrixA$.next(this.matrixA);
    this.matrixB$.next(this.matrixB);
    this.matrixResult$.next(null);
  }

  cpuMultiplyMatrix(): void {
    const startTime = performance.now();
    const productRow = Array.apply(null, new Array(this.matrixSize.value)).map(Number.prototype.valueOf, 0);
    const product = new Array(this.matrixSize.value);

    for (let p = 0; p < this.matrixSize.value; p++) {
      product[p] = productRow.slice();
    }

    for (let i = 0; i < this.matrixSize.value; i++) {
      for (let j = 0; j < this.matrixSize.value; j++) {
        for (let k = 0; k < this.matrixSize.value; k++) {
          product[i][j] += this.matrixA[i][k] * this.matrixB[k][j];
        }
      }
    }

    const endTime = performance.now();
    this.cpuTime = (endTime - startTime);
    this.matrixResult$.next(product as Array<Array<number>>);
  }

  gpuMultiplyMatrix(): void {
    const startTime = performance.now();
    const gpu = new GPU();
    const multiplyMatrix = gpu.createKernel(function _(a: number[][], b: number[][], matrixSize: number): number {
      let sum = 0;
      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
      }
      return sum;
    }).setOutput([this.matrixSize.value, this.matrixSize.value]);

    const product = multiplyMatrix(this.matrixA, this.matrixB, this.matrixSize.value);

    const endTime = performance.now();
    this.gpuTime = (endTime - startTime);
    this.matrixResult$.next(product as Array<Array<number>>);
  }

  clear(): void {
    this.readonly = false;

    this.matrixA = null;
    this.matrixB = null;

    this.matrixSize.setValue(null);
    this.matrixA$.next(null);
    this.matrixB$.next(null);
    this.matrixResult$.next(null);

    this.cpuTime = null;
    this.gpuTime = null;
  }
}
