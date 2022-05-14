const currentDayForecast = (data) => [
  {
    name: 'predictability',
    value: data.predictability,
    unit: '%',
  },
  {
    name: 'humidity',
    value: data.humidity,
    unit: '%',
  },
  {
    name: 'wind',
    value: Math.round(data.wind_speed),
    unit: 'km/h',
  },
  {
    name: 'Highest',
    value: Math.round(data.max_temp),
    unit: '°C',
  },
  {
    name: 'Lowest',
    value: Math.round(data.min_temp),
    unit: '°C',
  },
];

export default currentDayForecast;
