import { render } from '@testing-library/react';
import React from 'react';
import Hello from '.';

describe('Hello', () => {
  test('renders', () => {
    const { getByText } = render(<Hello name="Jane" />);
    expect(getByText('Hello Jane')).toBeInTheDocument();
  });
  test('fails to find incorrect text', () => {
    const { findByText } = render(<Hello name="Jane" />);
    return findByText('Hi Jane').catch(error => expect(error).not.toBeNull());
  });
});
