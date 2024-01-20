import { createSlice } from '@reduxjs/toolkit';

const columnModalSlice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
    // other modal-related state properties
  },
  reducers: {
    openColumnModal: (state) => {
      state.visible = true;
    },
    closeColumnModal: (state) => {
      state.visible = false;
    },
    // other modal-related reducers
  },
});

export const { openColumnModal, closeColumnModal } = columnModalSlice.actions;
export default columnModalSlice.reducer;
