import { screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Confirmation from 'src/components/Confirmation/Confirmation';
import { FIELD_SET } from 'src/data/field-set';
import Form from 'src/features/Form/Form';
import reducer, {
  updateFormData,
  selectFullName,
} from 'src/features/Form/FormSlice';
import { setupStore } from 'src/redux/store';
import { renderWithProviders, mockData, fillForm } from 'src/utils/test-utils';

describe('Confirmation Component', () => {
  it('renders the heading with full name', () => {
    renderWithProviders(<Form fieldSet={FIELD_SET} />);
    const store = setupStore({ Form: mockData });
    const state = store.getState();

    renderWithProviders(<Confirmation />);
    const fullName = selectFullName(state);

    expect(fullName).toEqual(
      `${mockData.formData.firstName} ${mockData.formData.lastName}`
    );
  });

  it('renders the collected data', async () => {
    const { rerender } = renderWithProviders(<Form fieldSet={FIELD_SET} />);
    const store = setupStore({ Form: mockData });
    const reduxState = store.getState();
    fillForm();

    const submitBtn = screen.getByRole('button', { name: 'Submit' });

    fireEvent.click(submitBtn);

    expect(reducer(reduxState.Form, updateFormData(mockData.formData))).toEqual(
      mockData
    );

    rerender(<Confirmation />);

    let firstName,
      lastName,
      email,
      address,
      city,
      state,
      zipCode,
      phone,
      jobTitle,
      reason;

    await waitFor(() => {
      firstName = screen.getByText(mockData.formData.firstName);
      lastName = screen.getByText(mockData.formData.lastName);
      email = screen.getByText(mockData.formData.email);
      address = screen.getByText(mockData.formData.address);
      city = screen.getByText(mockData.formData.city);
      state = screen.getByText(mockData.formData.state);
      zipCode = screen.getByText(mockData.formData.zipCode);
      phone = screen.getByText(mockData.formData.phone);
      jobTitle = screen.getByText(mockData.formData.jobTitle);
      reason = screen.getByText(mockData.formData.reason);
    });

    expect(firstName).toBeInTheDocument();
    expect(firstName).toHaveTextContent(mockData.formData.firstName);
    expect(lastName).toBeInTheDocument();
    expect(lastName).toHaveTextContent(mockData.formData.lastName);
    expect(email).toBeInTheDocument();
    expect(email).toHaveTextContent(mockData.formData.email);
    expect(address).toBeInTheDocument();
    expect(address).toHaveTextContent(mockData.formData.address);
    expect(city).toBeInTheDocument();
    expect(city).toHaveTextContent(mockData.formData.city);
    expect(state).toBeInTheDocument();
    expect(state).toHaveTextContent(mockData.formData.state);
    expect(zipCode).toBeInTheDocument();
    expect(zipCode).toHaveTextContent(mockData.formData.zipCode);
    expect(phone).toBeInTheDocument();
    expect(phone).toHaveTextContent(mockData.formData.phone);
    expect(jobTitle).toBeInTheDocument();
    expect(jobTitle).toHaveTextContent(mockData.formData.jobTitle);
    expect(reason).toBeInTheDocument();
    expect(reason).toHaveTextContent(mockData.formData.reason);
  });

  it('renders the Go Back button and trigger it', async () => {
    const { rerender } = renderWithProviders(<Confirmation />);

    const goBackBtn = screen.getByRole('button', { name: 'Go Back' });
    fireEvent.click(goBackBtn);

    rerender(<Form fieldSet={FIELD_SET} />);

    await waitFor(() => {
      const form = screen.getByTestId('form');
      expect(form).toBeInTheDocument();
    });

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

    expect(firstNameInput).toHaveTextContent('');
    expect(lastNameInput).toHaveTextContent('');
    expect(emailInput).toHaveTextContent('');
    expect(addressInput).toHaveTextContent('');
    expect(cityInput).toHaveTextContent('');
    expect(stateInput).toHaveTextContent('');
    expect(zipCodeInput).toHaveTextContent('');
    expect(phoneInput).toHaveTextContent('');
    expect((jobTitleSelect as HTMLOptionElement).selected).toBeFalsy();
    expect(reasonInput).toHaveTextContent('');
  });
});
