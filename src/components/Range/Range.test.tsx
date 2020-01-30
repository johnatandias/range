import React from 'react';
import { render } from '@testing-library/react';
import { Range } from './Range';

describe('Range component', () => {
  const rangeProps = {
    min: 0,
    max: 100,
    value: 50,
    label: 'Year'
  }

  const { container } = render(<Range {...rangeProps} />);

  it('renders without crashing', () => {
    expect(container).toBeInTheDocument();
  });
});
