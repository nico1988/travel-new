/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import CurrentDay from './CurrentDay';
import CurrentDayDescription from './CurrentDayDescription';
import UpcomingDaysForecast from './UpcomingDaysForecast';
import styles from '../css/Forecast.module.css';

function refreshPage() {
  window.location.reload(false);
}

const Forecast = ({ forecast }) => (
  <div>
    <Container data-testid="forcastContainer" className={styles.box} style={{ width: 500, background: "#343d4b" }}>
      <Row>
        <Col xs={12} md={4}>
          <div className={styles.card}>
            <CurrentDay {...forecast.currentDay} />
          </div>
        </Col>
        <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
          <CurrentDayDescription forecast={forecast.currentDayDetails} />
          <UpcomingDaysForecast days={forecast.upcomingDays} />
        </Col>
      </Row>
    </Container>
    <center>

      <button className={styles.button} onClick={refreshPage}>
        Back To Search
      </button>

    </center>
  </div>
);

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object.isRequired,
    currentDayDetails: PropTypes.array.isRequired,
    upcomingDays: PropTypes.array.isRequired,
  }),
};

export default Forecast;
