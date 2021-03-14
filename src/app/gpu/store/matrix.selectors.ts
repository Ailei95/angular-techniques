import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MatrixState} from '../gpu.module';

export const getMatrixState = createFeatureSelector<MatrixState>('matrix');

export const getCpuTime = createSelector(
  getMatrixState,
  (state: MatrixState) => state.cpuTime
);

export const getGpuTime = createSelector(
  getMatrixState,
  (state: MatrixState) => state.gpuTime
);

export const getMatrixSize = createSelector(
  getMatrixState,
  (state: MatrixState) => state.matrixSize
);

export const getMatrixA = createSelector(
  getMatrixState,
  (state: MatrixState) => state.matrixA
);

export const getMatrixB = createSelector(
  getMatrixState,
  (state: MatrixState) => state.matrixB
);

export const getMatrixResult = createSelector(
  getMatrixState,
  (state: MatrixState) => state.matrixResult
);
