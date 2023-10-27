import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from 'src/App';
import { renderWithProviders } from 'src/utils/test-utils';

describe('App Component', () => {
  it('renders the homepage with header and form', () => {
    renderWithProviders(<App />);

    const headerLogo = screen.getByAltText('CommandLink');
    expect(headerLogo).toBeInTheDocument();

    const myName = screen.getByText('Steven Du');
    expect(myName).toBeInTheDocument();
    expect(myName).toHaveTextContent('Steven Du');

    const heading = screen.getByText('Complete The Form');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Complete The Form');

    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument();
  });
});
