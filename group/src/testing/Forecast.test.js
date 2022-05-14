import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import './common.js';
import CurrentDayDescription from '../components/CurrentDayDescription';
// Calendar test suit
describe('Calendar', () => {
  it('should renders CurrentDayDescription container', async () => {

    const forecast = [{ name: '', value: 222, unit: '' }];
    const CurrentDayDescriptionElement = render(
      <BrowserRouter>
        <CurrentDayDescription forecast={forecast} />
      </BrowserRouter>
    );

    expect(CurrentDayDescriptionElement.getByTestId('currentDayDescriptionContainer')).toBeInTheDocument();
  })
})
