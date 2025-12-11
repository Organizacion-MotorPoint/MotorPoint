import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar links', () => {
  render(<App />);
  expect(screen.getAllByText(/Catálogo/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Autos/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Motos/i).length).toBeGreaterThan(0);
});
