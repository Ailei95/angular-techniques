import {createReducer, on} from '@ngrx/store';
import {generateMatrix, cpuMultiplyMatrix, gpuMultiplyMatrix, resetMatrix} from './matrix.actions';
import {MatrixState} from '../gpu.module';
import {GPU} from 'gpu.js';

export const initialState = {
  cpuTime: null,
  gpuTime: null,
  matrixSize: 0,
  matrixA: null,
  matrixB: null,
  matrixResult: null
};

export const matrixReducer = createReducer(
  initialState,
  on(generateMatrix, (state, action) => {
    const matrixA = [];
    const matrixB = [];

    for (let y = 0; y < action.matrixSize; ++y) {
      matrixA.push([]);
      matrixB.push([]);
      for (let x = 0; x < action.matrixSize; ++x) {
        matrixA[y].push(Math.floor((Math.random() * 100)));
        matrixB[y].push(Math.floor((Math.random() * 100)));
      }
    }

    return {
      cpuTime: null,
      gpuTime: null,
      matrixSize: action.matrixSize,
      matrixA,
      matrixB,
      matrixResult: null
    };
  }),
  on(cpuMultiplyMatrix, (state) => {
    const newState = Object.assign({}, state);

    const startTime = performance.now();
    const productRow = Array.apply(null, new Array(state.matrixSize)).map(Number.prototype.valueOf, 0);
    const product = new Array(state.matrixSize);

    for (let p = 0; p < state.matrixSize; p++) {
      product[p] = productRow.slice();
    }

    for (let i = 0; i < state.matrixSize; i++) {
      for (let j = 0; j < state.matrixSize; j++) {
        for (let k = 0; k < state.matrixSize; k++) {
          product[i][j] += state.matrixA[i][k] * state.matrixB[k][j];
        }
      }
    }

    const endTime = performance.now();

    newState.cpuTime = (endTime - startTime);
    newState.matrixResult = product;

    console.log(product);

    return newState;
  }),
  on(gpuMultiplyMatrix, (state) => {
    const newState = Object.assign({}, state);

    const gpu = new GPU();
    const startTime = performance.now();

    const multiplyMatrix = gpu.createKernel(function(a: number[][], b: number[][], matrixSize: number): number {
      let sum = 0;
      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
      }
      return sum;
    }).setOutput([state.matrixSize, state.matrixSize]);

    const product = multiplyMatrix(state.matrixA, state.matrixB, state.matrixSize) as Array<any>;
    const endTime = performance.now();

    newState.gpuTime = (endTime - startTime);
    newState.matrixResult = product.map((float32Array: Float32Array) => Array.from(float32Array));

    return newState;
  }),
  on(resetMatrix, () => initialState)
);
