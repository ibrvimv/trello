'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'First',
    bgColor: 'bg-red-200',
    id: '1111Adsfdsfdsf',
  },
  {
    title: 'Second',
    bgColor: 'bg-cyan-200',
    id: '2222fdsfsfalfdslf',
  },
  {
    title: 'Third',
    bgColor: 'bg-green-200',
    id: '3333erweirpweprp',
  },
];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload);
    },
    reorderItems: (state, action) => {
      const { startIndex, endIndex } = action.payload;
      const [removedItem] = state.splice(startIndex, 1);
      state.splice(endIndex, 0, removedItem);
    },
  },
});

export const { addItem, removeItem, reorderItems } = dataSlice.actions;

export default dataSlice.reducer;
