import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FIELD_SET } from 'src/data/field-set';
import Form from 'src/features/Form/Form';
import reducer, {
  updateFormData,
  resetForm,
  initialState,
} from 'src/features/Form/FormSlice';
import { setupStore } from 'src/redux/store';
import { splitCamelCase } from 'src/utils';
import { renderWithProviders, mockData, fillForm } from 'src/utils/test-utils';

describe('Form Component', () => {
  it('renders all input fields with labels from field-set', () => {
    renderWithProviders(<Form fieldSet={FIELD_SET} />);

    const inputNodes: HTMLElement[][] = [];

    FIELD_SET.forEach(field => {
      if (Array.isArray(field)) {
        field.forEach(fieldChild => {
          const node = screen.getAllByLabelText(splitCamelCase(fieldChild.id), {
            selector: 'input',
          });
          inputNodes.push(node);
        });
      } else {
        const node = screen.getAllByLabelText(splitCamelCase(field.id), {
          selector:
            field.type === 'text'
              ? 'input'
              : field.type === 'select'
              ? 'select'
              : 'textarea',
        });
        inputNodes.push(node);
      }
    });

    expect(inputNodes).toHaveLength(10);
  });

  it('renders form submit and reset button', () => {
    renderWithProviders(<Form fieldSet={FIELD_SET} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('should dispatch updateFormData action on form submit', () => {
    renderWithProviders(<Form fieldSet={FIELD_SET} />);
    const store = setupStore();
    const state = store.getState();
    fillForm();

    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitBtn);

    expect(reducer(state.Form, updateFormData(mockData.formData))).toEqual(
      mockData
    );
  });

  it('should dispatch resetForm action on form reset', () => {
    renderWithProviders(<Form fieldSet={FIELD_SET} />);
    const store = setupStore();
    const state = store.getState();
    fillForm();

    const resetBtn = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(resetBtn);
    expect(reducer(state.Form, resetForm)).toEqual(initialState);

    const firstNameInput = screen.getByRole('textbox', { name: 'first Name' });
    const lastNameInput = screen.getByRole('textbox', { name: 'last Name' });
    const emailInput = screen.getByRole('textbox', { name: 'email' });
    const addressInput = screen.getByRole('textbox', { name: 'address' });
    const cityInput = screen.getByRole('textbox', { name: 'city' });
    const stateInput = screen.getByRole('textbox', { name: 'state' });
    const zipCodeInput = screen.getByRole('textbox', { name: 'zip Code' });
    const phoneInput = screen.getByRole('textbox', { name: 'phone' });
    const jobTitleSelect = screen.getByRole('combobox', { name: 'job Title' });
    const reasonInput = screen.getByRole('textbox', { name: 'reason' });

    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(addressInput).toHaveValue('');
    expect(cityInput).toHaveValue('');
    expect(stateInput).toHaveValue('');
    expect(zipCodeInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');
    expect(jobTitleSelect).toHaveValue('');
    expect(reasonInput).toHaveValue('');
  });
});
