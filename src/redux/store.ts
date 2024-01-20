'use client';

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data-slice';
import columnModalSlice from './column-modal-slice';

const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: columnModalSlice,
  },
});

export default store;
