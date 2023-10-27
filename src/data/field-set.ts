import { Fields } from 'src/types/types';

export const FIELD_SET: Fields[] = [
  [
    {
      id: 'firstName',
      placeholder: 'First name',
      required: true,
      type: 'text',
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: 'text',
    },
  ],
  {
    id: 'email',
    required: true,
    type: 'text',
  },
  {
    id: 'address',
    placeholder: 'Address',
    type: 'text',
  },
  [
    {
      id: 'city',
      type: 'text',
    },
    {
      id: 'state',
      type: 'text',
    },
    {
      id: 'zipCode',
      type: 'text',
    },
  ],
  {
    id: 'phone',
    required: true,
    type: 'text',
  },
  {
    id: 'jobTitle',
    options: [
      'Engineer - lead',
      'Engineer - mid level',
      'Engineer - junion',
      'Engineer - front end focused',
      'Engineer - backend focused',
      'Engineer - full stack',
    ],
    placeholder: 'Please select job title',
    type: 'select',
  },
  {
    id: 'reason',
    placeholder:
      'Describe why you are a good fit for the job you are applying for.',
    type: 'textarea',
  },
];
