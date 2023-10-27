import { HTMLInputTypeAttribute } from 'react';
import { Validate } from 'react-hook-form';
import { FormData } from 'src/features/Form/FormSlice';

export type Fields = Field | Field[];

export type Field = {
  id: keyof FormData;
  placeholder?: string;
  required?: boolean;
  type: HTMLInputTypeAttribute | 'select';
  options?: string[];
};

export type Validation = Partial<{
  [key in keyof FormData]: Validate<string> | Record<string, Validate<string>>;
}>;
