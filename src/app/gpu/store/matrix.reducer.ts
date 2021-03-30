import {createReducer, on} from '@ngrx/store';
import * as MatrixActions from './matrix.actions';
import {GPU} from 'gpu.js';

export interface MatrixState {
  cpuTime: number;
  gpuTime: number;
  matrixSize: number;
  matrixA: Array<Array<number>>;
  matrixB: Array<Array<number>>;
  matrixResult: Array<Array<number>>;
}

export const initialState = {
  cpuTime: null,
  gpuTime: null,
  matrixSize: null,
  matrixA: [],
  matrixB: [],
  matrixResult: []
};

export const matrixReducer = createReducer(
  initialState,
  on(MatrixActions.generateMatrix, (state, action) => {
    if (action.matrixSize > 0) {
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

      return {...initialState, matrixSize: action.matrixSize, matrixA, matrixB};
    } else {
      return {...state};
    }
  }),
  on(MatrixActions.cpuMultiplyMatrix, (state) => {
    if (state.matrixSize > 0) {
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

      return {...state, cpuTime: (endTime - startTime), matrixResult: product};
    } else {
      return {...state};
    }
  }),
  on(MatrixActions.gpuMultiplyMatrix, (state) => {
    if (state.matrixSize > 0) {
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

      return {
        ...state,
        gpuTime: (endTime - startTime),
        matrixResult: product.map((float32Array: Float32Array) => Array.from(float32Array))
      };
    } else {
      return {...state};
    }
  }),
  on(MatrixActions.resetMatrix, () => initialState)
);
