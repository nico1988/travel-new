import React from 'react';
import { PropTypes } from 'prop-types';
import icon1 from '../image/location-pin.png';
import styles from '../css/CurrentDay.module.css';

const CurrentDay = ({
  weekday, date, location, temperature, weatherIcon, weatherDescription,
}) => (
  <div className="d-flex parentContainer">
    <div className={styles.img} />
    <div className={`${styles.cardInner} d-flex flex-column justify-content-between pt-3 pb-2 pl-2`}>
        <h3 className="font-weight-bold mb-1 text-white">{weekday}</h3>
        <p className="mb-0 text-white">{date}</p>
        <p className="d-flex align-items-baseline font-weight-lighter mb-1 text-white">
          <img width="15  " height="20" src={icon1} className="mr-1" alt="location pin icon" />
          <span>{location}</span>
        </p>
      <div>
        <img width="45" src={weatherIcon} alt="" />
        <h2 className="font-weight-bold mb-1 text-white">
          <span>{temperature}</span>
          °C
        </h2>
        <h5 className="font-weight-lighter text-white">{weatherDescription}</h5>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
