'use client';

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data-slice';
import modalSlice from './modal-slice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    data: dataSlice,
  },
});

export default store;
