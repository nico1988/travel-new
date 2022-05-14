import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import Calendar from '../components/Calendar';
import { act } from 'react-dom/test-utils';

import './common.js';

// Calendar test suit
describe('Calendar', () => {
  it('renders add new Event', async () => {
    await act(async () => render(<BrowserRouter><Calendar /></BrowserRouter>));
    const heading = screen.queryByText(/Add New Event/);
    fireEvent.click(heading);
    expect(heading).toBeInTheDocument()
  })
})
