import React from 'react';
import Form from './Form';
import Forecast from './Forecast';
import useForecast from '../hooks/useForecast';
import styles from '../css/Page.module.css';
import Title from './Title';

const Page = (props) => {
  const {
    isLoading, forecast, submitRequest,
  } = useForecast();
  const onSubmit = (value) => {
    submitRequest(value);
  };

  return (
    <>
    <Title />
      {!forecast && (
        <div className={`${styles.box1} `} style={{width:5000}}>
          {!isLoading && <Form submitSearch={onSubmit} />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast}/>}
      
    </>
  );
};

export default Page;
