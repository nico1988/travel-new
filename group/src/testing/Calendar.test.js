import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Homepage from '../components/Homepage';
import Calendar from '../components/Calendar';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { StaticRouter } from "react-router-dom";

// it('Get Current Day weather', () => {
//   const div = document.createElement('div');
//   render(
//     <BrowserRouter><Homepage /></BrowserRouter>
//   );
// });


// Calendar test suit
describe('Calendar', () => {
  test('renders add new Event', () => {
    render(<BrowserRouter><Calendar /></BrowserRouter>)

    const heading = screen.getByText('Add New Event');

    fireEvent.click(heading);

    // expect(heading).toBeInTheDocument()
  })
})
