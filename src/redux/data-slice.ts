'use client';

import { createSlice, current } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'Column-1',
    title: 'First',
    items: [
      {
        id: 'item-1',
        title: 'Item-1',
        bgColor: 'bg-red-200',
      },
      {
        id: 'item-2',
        title: 'Item-2',
        bgColor: 'bg-cyan-200',
      },
    ],
  },
  {
    id: 'Column-2',
    title: 'Second',
    items: [
      {
        id: 'item-3',
        title: 'Item-3',
        bgColor: 'bg-red-200',
      },
      {
        id: 'item-4',
        title: 'Item-4',
        bgColor: 'bg-green-200',
      },
    ],
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
    reorderClomuns: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const newState = [...state];

      const [removedItem] = newState.splice(sourceIndex, 1);
      newState.splice(destinationIndex, 0, removedItem);
      return newState;
    },
    reorderItems: (state, action) => {},
  },
});

export const { addItem, reorderClomuns, reorderItems } = dataSlice.actions;

export default dataSlice.reducer;
