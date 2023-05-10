import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('There must be a configuration button', () => {
  render(<App />);
  const linkElement = screen.getByTestId('config-button');
  expect(linkElement).toBeInTheDocument();
});

