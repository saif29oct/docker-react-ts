import { render, screen } from '@testing-library/react';
import { Person } from '../../Components/Person'

test('Checking Person Name By Text', () => {
  render(<Person name={"Safinaz"} />);
  const divElement = screen.getByText(/Safinaz/i);
  expect(divElement).toBeInTheDocument();
});

test('Checking Person Name By Role', () => {
  render(<Person name={"Safinaz"} />);
  const divElement = screen.getByRole("nameinfo");
  expect(divElement).toHaveTextContent('Safinaz');
});

test('Checking role attribute', () => {
  render(<Person name={"Safinaz"} />);
  const divElement = screen.getByRole("nameinfo");
  expect(divElement).toHaveAttribute('role', 'nameinfo')
});


