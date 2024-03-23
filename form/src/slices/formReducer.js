 import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formData: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      img: '',
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { updateFormData } = formSlice.actions;

export default formSlice.reducer;
