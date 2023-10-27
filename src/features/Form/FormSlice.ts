import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/store';

interface FormState {
  formData: FormData;
  submitted: boolean;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  jobTitle: string;
  reason: string;
}

export const initialState: FormState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    jobTitle: '',
    reason: '',
  },
  submitted: false,
};

export const FormSlice = createSlice({
  name: 'Form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    submitForm: state => {
      state.submitted = true;
    },
    resetForm: state => {
      state.formData = initialState.formData;
      state.submitted = false;
    },
  },
});

export const { updateFormData, submitForm, resetForm } = FormSlice.actions;

export const selectFormData = ({ Form }: RootState) => Form.formData;

export const selectFullName = ({ Form }: RootState) => {
  return `${Form.formData.firstName} ${Form.formData.lastName}`;
};

export const selectSubmitted = ({ Form }: RootState) => Form.submitted;

export default FormSlice.reducer;
