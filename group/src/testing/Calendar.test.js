import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import Calendar from '../components/Calendar';

delete window.matchMedia
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })

// Calendar test suit
describe('Calendar', () => {
  it('renders add new Event', () => {
    render(<BrowserRouter><Calendar /></BrowserRouter>)
    const heading = screen.queryByText(/Add New Event/);
    fireEvent.click(heading);
    expect(heading).toBeInTheDocument()
  })
})
