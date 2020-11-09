import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Slots from './Slots';
import { getUser } from '../../services/slots-api';

jest.mock('../../services/slots-api.js');

describe('slots component', () => {  
  it('renders slots', async() => {
    getUser.mockResolvedValue({
      name: 'chad',
      money: 1000
    });
    render(
      <Slots match={{ params: { id: 1 } }} />
    );

    const slots = await screen.findByTestId('slots');
    return waitFor(() => {
      expect(slots).not.toBeEmptyDOMElement();
    });
  });
});
