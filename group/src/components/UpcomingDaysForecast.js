/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/*eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from './UpcomingDaysForecastItem';

import styles from '../css/UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) => (
  <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

UpcomingDaysForecast.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
