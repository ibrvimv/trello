'use client';

import { createSlice, current } from '@reduxjs/toolkit';

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
      // console.log('before', current(state));
      const newState = [...state];
      newState.push(action.payload);

      return newState;

      // console.log('after', current(state));
    },
    // removeItem: (state, action) => {
    //   state = state.filter((item) => item.id !== action.payload);
    // },
    reorderItems: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const newState = [...state];

      const [removedItem] = newState.splice(sourceIndex, 1);
      newState.splice(destinationIndex, 0, removedItem);
      return newState;
    },
  },
});

export const { addItem, reorderItems } = dataSlice.actions;

export default dataSlice.reducer;
