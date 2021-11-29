import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("it is the postcode element visible", () => {
  render(<App />);
  const postcode = screen.getByTitle("postcodeInput");
  expect(postcode).toBeInTheDocument();

});

// and so on
// test ("if there is a bad postcode"), () => {
// }

// test ("it is invalid imput bad postcode the error is visible") , () => {
// }

// test ("it is the api call properly call "), () => {
//
// }