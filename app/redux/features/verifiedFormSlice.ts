// src/redux/slices/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  company: string;
  employeeSize: string;
  name: string;
  residentialType: string;
  country: string;
  address: string;
}

const initialState: FormData = {
  company: '',
  employeeSize: '',
  name: '',
  residentialType: '',
  country: '',
  address: '',
};

const verifiedFormSlice = createSlice({
  name: 'verified form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormData>) => {
      return action.payload;
    },
  },
});

export const { setFormData } = verifiedFormSlice.actions;
export default verifiedFormSlice.reducer;
