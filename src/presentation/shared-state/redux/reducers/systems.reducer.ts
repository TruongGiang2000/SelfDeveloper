import {createReducer} from '@reduxjs/toolkit';

import {setLanguage} from '../actions';

export type SystemsState = {
  language: string;
};

const INITIAL_STATE: SystemsState = {
  language: 'vi',
};

export const systemsReducer = createReducer(INITIAL_STATE, (builder) =>
  builder.addCase(setLanguage, (state, action) =>
    Object.assign(state, {language: action.payload}),
  ),
);
