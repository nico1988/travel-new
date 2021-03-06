/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CurrentDayDescriptionItem from './CurrentDayDescriptionItem';


const CurrentDayDescription = ({ forecast }) => (
  <div className="mt-4 mt-md-2" data-testid="currentDayDescriptionContainer">
    <div className="d-flex flex-column mb-2 text-bold text-white">
      {forecast.map((item) => (
        <CurrentDayDescriptionItem {...item} key={item.name} />
      ))}
    </div>
  </div>
);

CurrentDayDescription.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export default CurrentDayDescription;
