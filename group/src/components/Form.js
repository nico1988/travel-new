import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Form.module.css';

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        data-testid="formInput"
        className={`${styles.input} form-control`}
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <button
        data-testid="formSearchButton"
        type="submit" className={styles.button} onClick={onSubmit}>
        SEARCH
      </button>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
