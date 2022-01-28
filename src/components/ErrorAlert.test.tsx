
import React from 'react';
import ErrorAlert from './ErrorAlert';
import {render } from '@testing-library/react';

  test('test category name exist', () => {
    const { getByText } = render(<ErrorAlert showAlert errorMessage="An error occured."/>);
    const errorElement = getByText(/an error occured/i);
    expect(errorElement).toBeInTheDocument();
  })