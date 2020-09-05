import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to iSeries.com!/i);
  expect(linkElement).toBeInTheDocument();
});
