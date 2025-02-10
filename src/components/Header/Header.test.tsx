import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { TEXTS } from '../../constants/textConstants';

describe('Header Component', () => {
  test('renders the header title, subtitle, and description', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      TEXTS.header.title,
    );
    expect(screen.getByText(TEXTS.header.subtitle)).toBeInTheDocument();
    expect(screen.getByText(TEXTS.header.description)).toBeInTheDocument();
  });
});
