import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import UpcomingDaysForecast from '../components/UpcomingDaysForecast';
import './common.js';

// Calendar test suit
describe('UpcomingDaysForecast test suit', () => {
  const days = [
    {
      weekday: 'Monday',
      date: '01/01/2020',
      imgUrl: 'https://www.metaweather.com/static/img/weather/png/64/s01d.png',
      temperature: 33,
      description: 'sunny',
      icon: '01d',
    },
    {
      weekday: 'Tuesday',
      date: '01/01/2020',
      imgUrl: 'https://www.metaweather.com/static/img/weather/png/64/s01d.png',
      temperature: 34,
      description: 'sunny',
      icon: '01d',
    }
  ]

  it('should render upcomingDaysContainer', async () => {
    const upcommingDaysElement = render(<BrowserRouter><UpcomingDaysForecast days={days} /></BrowserRouter>);

    const upcomingDaysContainer = await upcommingDaysElement.getByTestId('upcomingDaysContainer');

    console.log('upcomingDaysContainer', upcomingDaysContainer.childElementCount);

    expect(upcomingDaysContainer).toBeInTheDocument();
  })

  it('shoud render upcomingDaysContainer child count', async () => {
    const upcommingDaysElement = render(<BrowserRouter><UpcomingDaysForecast days={days} /></BrowserRouter>);

    const upcomingDaysContainer = await upcommingDaysElement.getByTestId('upcomingDaysContainer');

    expect(upcomingDaysContainer.childElementCount).toBe(days.length);
  })
})
