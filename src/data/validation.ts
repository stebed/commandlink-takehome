import { Validation } from 'src/types/types';
import {
  isValidName,
  isValidEmail,
  isValidAddress,
  isValidCity,
  isValidState,
  isValidZip,
  isValidPhone,
} from 'src/utils';

export const VALIDATION: Validation = {
  firstName: (name: string) => isValidName(name) || 'Enter a valid first name.',
  lastName: (name: string) => isValidName(name) || 'Enter a valid last name.',
  email: (email: string) => isValidEmail(email) || 'Enter a valid email.',
  address: (address: string) => isValidAddress(address) || 'Enter a valid address.',
  city: (city: string) => isValidCity(city) || 'Enter a valid city.',
  state: (state: string) => isValidState(state) || 'Enter a valid state.',
  zipCode: (zip: string) => isValidZip(zip) || 'Enter a valid zip code.',
  phone: (phone: string) => isValidPhone(phone) || 'Enter a valid phone number.',
};
