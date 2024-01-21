'use client';

import { createSlice, current } from '@reduxjs/toolkit';
import { produce } from 'immer';

const initialState = [
  {
    id: 'Column-1',
    title: 'First',
    items: [
      {
        id: 'item-1',
        title: 'Item-1',
        subtitle: 'subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci odio quaerat at iure harum minima cumque est autem, officiis sint possimus quasi!',
        bgColor: 'bg-red-200',
      },
      {
        id: 'item-2',
        title: 'Item-2',
        subtitle: 'subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci odio quaerat at iure harum minima cumque est autem, officiis sint possimus quasi!',
        bgColor: 'bg-cyan-200',
      },
    ],
    modal: {
      visible: false,
    },
  },
  {
    id: 'Column-2',
    title: 'Second',
    items: [
      {
        id: 'item-3',
        title: 'Item-3',
        subtitle: 'subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci odio quaerat at iure harum minima cumque est autem, officiis sint possimus quasi!',
        bgColor: 'bg-red-200',
      },
      {
        id: 'item-4',
        title: 'Item-4',
        subtitle: 'subtitle',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius adipisci odio quaerat at iure harum minima cumque est autem, officiis sint possimus quasi!',
        bgColor: 'bg-green-200',
      },
    ],
    modal: {
      visible: false,
    },
  },
];
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // addItem: (state, action) => {
    //   // console.log('before', current(state));
    //   // const { columnId, newItem } = action.payload;
    //   // const columnIndex = state.findIndex((column) => column.id === columnId);

    //   // if (columnIndex !== -1) {
    //   //   state[columnIndex].items.push(newItem);
    //   // }

    //   // console.log('after', current(state));

    // },
    addItem: (state, action) => {
      const { columnId, newItem } = action.payload;
      const columnIndex = state.findIndex((column) => column.id === columnId);

      if (columnIndex !== -1) {
        // Create a new state array to maintain immutability
        const newState = [...state];

        // Create a new items array for the target column
        const newItems = [...newState[columnIndex].items, newItem];

        // Update the target column with the new items array
        newState[columnIndex] = {
          ...newState[columnIndex],
          items: newItems,
        };
        // console.log('after', current(state));
        // Return the new state
        return newState;
      }

      // Return the existing state if the column is not found
      return state;
    },

    updateItem: (state, action) => {
      const { newItem } = action.payload;

      const columnIndex = state.findIndex(
        (column) =>
          column.items.findIndex((item) => item.id === newItem.id) !== -1
      );

      if (columnIndex !== -1) {
        return produce(state, (draft) => {
          const itemIndex = draft[columnIndex].items.findIndex(
            (item) => item.id === newItem.id
          );

          if (itemIndex !== -1) {
            // Update the item with the new data
            draft[columnIndex].items[itemIndex] = { ...newItem };
          }
        });
      }

      // Return the existing state if the item is not found
      return state;
      // const { newItem } = action.payload;

      // const columnIndex = state.findIndex(
      //   (column) =>
      //     column.items.findIndex((item) => item.id === newItem.id) !== -1
      // );

      // if (columnIndex !== -1) {
      //   const newState = [...state];
      //   const itemIndex = newState[columnIndex].items.findIndex(
      //     (item) => item.id === newItem.id
      //   );

      //   if (itemIndex !== -1) {
      //     // Update the item with the new data
      //     newState[columnIndex].items[itemIndex] = { ...newItem };
      //     return newState;
      //   }
      // }

      // // Return the existing state if the item is not found
      // return state;
    },

    addColumn: (state, action) => {
      const { newItem } = action.payload;
      state.push(newItem);
    },
    // removeItem: (state, action) => {
    //   state = state.filter((item) => item.id !== action.payload);
    // },
    openModal: (state, action) => {
      const { columnId } = action.payload;
      const columnIndex = state.findIndex((column) => column.id === columnId);

      if (columnIndex !== -1) {
        state[columnIndex].modal.visible = true;
      }
    },
    closeModal: (state, action) => {
      const { columnId } = action.payload;
      const columnIndex = state.findIndex((column) => column.id === columnId);

      if (columnIndex !== -1) {
        state[columnIndex].modal.visible = false;
      }
    },
    reorderClomuns: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const newState = [...state];

      const [removedItem] = newState.splice(sourceIndex, 1);
      newState.splice(destinationIndex, 0, removedItem);
      return newState;
    },
    reorderItems: (state, action) => {
      const {
        sourceColumnIndex,
        destinationColumnIndex,
        sourceIndex,
        destinationIndex,
        source,
        destination,
      } = action.payload;

      const newSourceItems = [...state[sourceColumnIndex].items];
      const newDestinationItems =
        source.droppableId !== destination.droppableId
          ? [...state[destinationColumnIndex].items]
          : newSourceItems;

      const [deletedItem] = newSourceItems.splice(sourceIndex, 1);
      newDestinationItems.splice(destinationIndex, 0, deletedItem);

      const newColumns = [...state];

      newColumns[sourceColumnIndex] = {
        ...state[sourceColumnIndex],
        items: newSourceItems,
      };

      newColumns[destinationColumnIndex] = {
        ...state[destinationColumnIndex],
        items: newDestinationItems,
      };

      return newColumns;
    },
  },
});

export const {
  addItem,
  reorderClomuns,
  reorderItems,
  openModal,
  closeModal,
  addColumn,
  updateItem,
} = dataSlice.actions;

export default dataSlice.reducer;
