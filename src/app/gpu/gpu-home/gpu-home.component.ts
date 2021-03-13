import { Component, OnInit } from '@angular/core';
import { GPU } from 'gpu.js';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-gpu-home',
  templateUrl: './gpu-home.component.html',
  styleUrls: ['./gpu-home.component.css']
})
export class GpuHomeComponent implements OnInit {

  gpu: GPU;

  matrixSize = 10;
  matrixA: Array<Array<number>> = [];
  matrixB: Array<Array<number>> = [];

  matrixA$: Subject<Array<Array<number>>> = new Subject();
  matrixB$: Subject<Array<Array<number>>> = new Subject();

  matrixResult$: Subject<Array<Array<number>>> = new Subject();

  constructor() {
    this.gpu = new GPU();
  }

  ngOnInit(): void {
  }

  generateMatrices(): void {
    this.matrixA = [];
    this.matrixB = [];

    for (let y = 0; y < this.matrixSize; y++) {
      this.matrixA.push([]);
      this.matrixB.push([]);
      for (let x = 0; x < this.matrixSize; x++) {
        this.matrixA[y].push(Math.floor((Math.random() * 100)));
        this.matrixB[y].push(Math.floor((Math.random() * 100)));
      }
    }

    this.matrixA$.next(this.matrixA);
    this.matrixB$.next(this.matrixB);
  }

  gpuMultiplyMatrix(): void {
    const gpu = new GPU();
    const multiplyMatrix = gpu.createKernel(function _(a: number[][], b: number[][], matrixSize: number): number {
      let sum = 0;
      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
      }
      return sum;
    }).setOutput([this.matrixSize, this.matrixSize]);

    const resultMatrix = multiplyMatrix(this.matrixA, this.matrixB, this.matrixSize);

    this.matrixResult$.next(resultMatrix as Array<Array<number>>);
  }
}
