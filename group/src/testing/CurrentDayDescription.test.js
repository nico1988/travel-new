import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react'
import Form from '../components/Form';
import './common.js';
import { expect, test } from "@jest/globals";

const submitSearch = (e) => {
  e.preventDefault();
}

// Calendar test suit
// @ts-ignore
describe('CurrentDayDescription component test suit', () => {
  // test suit for Form component
  test('should renders search button', async () => {
    const FormElement = render(<BrowserRouter><Form submitSearch={submitSearch} /></BrowserRouter>);
    const formSearchButton = await FormElement.findByTestId('formSearchButton');

    // @ts-ignore
    expect(formSearchButton).toBeInTheDocument();

    // @ts-ignore
    console.log('formSearchButton', formSearchButton.elementType);
  })

  // @ts-ignore
  it('input placeholder should be placeholder', async () => {
    const FormElement = render(<BrowserRouter><Form submitSearch={submitSearch} /></BrowserRouter>);

    const input = await FormElement.findByTestId('formInput');

    // @ts-ignore
    expect(input.placeholder).toBe('Enter location')
  })

})
