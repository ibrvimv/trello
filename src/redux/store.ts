'use client';

import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data-slice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
