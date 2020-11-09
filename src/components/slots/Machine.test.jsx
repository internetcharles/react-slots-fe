import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Machine from './Machine';

describe('Machine component', () => {
  afterEach(() => cleanup());
  it('renders Machine', () => {
    const { asFragment } = render(
      <Machine match={{ params: { id: 1 } }} />
    );
    expect(asFragment()).toMatchSnapshot;
  });
});