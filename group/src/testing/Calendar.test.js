import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Homepage from '../components/Homepage';
import ReactTestUtils from 'react-dom/test-utils'; 
import ReactDOM from 'react-dom';

it('Get Current Day weather', () => {
    const div = document.createElement('div');
    render(
      <BrowserRouter><Homepage/></BrowserRouter>);
  });