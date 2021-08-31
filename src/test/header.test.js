import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/header'

describe('Header component', () => {
  test('renders header', () => {
    render(<Header />)
  });
 
  test('displays manage my items', () => {
    render(<Header />);

    expect(screen.getByText('Manage my items')).toBeInTheDocument();
  });
});