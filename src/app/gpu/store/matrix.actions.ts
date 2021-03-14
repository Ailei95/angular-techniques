import {createAction, props} from '@ngrx/store';

export const generateMatrix = createAction('[Matrix Component] generateMatrix', props<{matrixSize: number}>());

export const cpuMultiplyMatrix = createAction('[Matrix Component] cpuMultiplyMatrix');

export const gpuMultiplyMatrix = createAction('[Matrix Component] gpuMultiplyMatrix');

export const resetMatrix = createAction('[Matrix Component] resetMatrix');
