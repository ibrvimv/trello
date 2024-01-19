import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    visible: false,
    // other modal-related state properties
  },
  reducers: {
    openModal: (state) => {
      state.visible = true;
    },
    closeModal: (state) => {
      state.visible = false;
    },
    // other modal-related reducers
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
