import { PropsWithChildren, ReactElement } from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { RenderOptions } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { setupStore, AppStore, RootState } from 'src/redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const mockData = {
  formData: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 West St',
    city: 'Brooklyn',
    state: 'NY',
    zipCode: '11111',
    phone: '1234567890',
    jobTitle: 'Engineer - lead',
    reason: 'Testing',
  },
  submitted: false,
};

export const fillForm = () => {
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

  fireEvent.change(firstNameInput, {
    target: { value: mockData.formData.firstName },
  });
  fireEvent.change(lastNameInput, {
    target: { value: mockData.formData.lastName },
  });
  fireEvent.change(emailInput, { target: { value: mockData.formData.email } });
  fireEvent.change(addressInput, {
    target: { value: mockData.formData.address },
  });
  fireEvent.change(cityInput, { target: { value: mockData.formData.city } });
  fireEvent.change(stateInput, { target: { value: mockData.formData.state } });
  fireEvent.change(zipCodeInput, {
    target: { value: mockData.formData.zipCode },
  });
  fireEvent.change(phoneInput, { target: { value: mockData.formData.phone } });
  fireEvent.change(jobTitleSelect, {
    target: { value: mockData.formData.jobTitle },
  });
  fireEvent.change(reasonInput, {
    target: { value: mockData.formData.reason },
  });
};
