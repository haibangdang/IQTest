import { render, screen } from '@testing-library/react';
import CustomHeader from '@/Components/CustomHeader';

describe('Custom Navbar', () => {
  test('Navbar render correctly', () => {
    render(<CustomHeader />);

    const navBarBrandEl = screen.getByText('React Boostrap Navbar');

    // const navBarBrandEl = screen.getByText('React Boostrap Navbar aaaa');

    expect(navBarBrandEl).toBeInTheDocument();

    // danh sách role: https://www.w3.org/TR/html-aria/#docconformance
  });
});
