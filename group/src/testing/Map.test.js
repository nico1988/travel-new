import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react'
import Calendar from '../components/Calendar';
import Map from '../components/Map'
import './common.js';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Calendar test suit
describe('Map test suit', () => {
  it('should render map container', async () => {
    const MapElement = render(<BrowserRouter><Map /></BrowserRouter>)
    const mapNotSurpport = await MapElement.findByTestId('mapNotSurpport');

    expect(mapNotSurpport).toBeInTheDocument();
  })

  it('should render nodeType to 1', async () => {
    const MapElement = render(<BrowserRouter><Map /></BrowserRouter>)
    const mapNotSurpport = await MapElement.findByTestId('mapNotSurpport');

    expect(mapNotSurpport.nodeType).toBe(1);
  })

  // todo test geoloaction api
})
