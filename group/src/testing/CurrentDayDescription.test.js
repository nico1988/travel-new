import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import Calendar from '../components/Calendar';
import Form from '../components/Form';
import './common.js';
import { expect, test } from "@jest/globals";

const submitSearch = (e) => {
  e.preventDefault();
}

// Calendar test suit
describe('CurrentDayDescription component test suit', () => {
  // test suit for Form component
  test('should renders search button', async () => {
    const FormElement = render(<BrowserRouter><Form submitSearch={submitSearch} /></BrowserRouter>);
    const formSearchButton = await FormElement.findByTestId('formSearchButton');

    expect(formSearchButton).toBeInTheDocument();

    console.log('formSearchButton', formSearchButton.elementType);
  })

  it('shoud render input', async () => {
    const FormElement = render(<BrowserRouter><Form submitSearch={submitSearch} /></BrowserRouter>);

    const input = await FormElement.findByTestId('formInput');

    expect(input.placeholder).toBe('Enter location')
  })

})
