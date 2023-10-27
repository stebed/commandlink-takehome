import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from 'src/components/Header/Header';

describe('Header Component', () => {
  it('renders the header with Command|Link logo', () => {
    render(<Header />);

    const logo = screen.getByAltText('CommandLink');
    expect(logo).toBeInTheDocument();
  });

  it('renders the header with my name', () => {
    render(<Header />);

    const myName = screen.getByText('Steven Du');
    expect(myName).toBeInTheDocument();
    expect(myName).toHaveTextContent('Steven Du');
  });
});
