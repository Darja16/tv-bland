import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  test('renders correctly', () => {
    render(<Pagination currentPage={1} onPageChange={() => {}} />);
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  test('disables "Previous" button on first page', () => {
    render(<Pagination currentPage={1} onPageChange={() => {}} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('calls onPageChange with correct page number on button click', () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination currentPage={2} onPageChange={onPageChangeMock} />);

    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText('Next'));
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  test('displays the correct current page number', () => {
    render(<Pagination currentPage={5} onPageChange={() => {}} />);
    expect(screen.getByText('Page 5')).toBeInTheDocument();
  });
});
