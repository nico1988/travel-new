import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Homepage from '../components/Homepage.js';
import Map from '../components/Map.js'
import WeatherApp from '../components/weatherApp'
import Calendar from '../components/Calendar';
import Signin from '../components/Signin.js';
import Signup from '../components/Signup.js'
import FrontendAuth from '../components/FrontendAuth'
import NoSignin from '../components/NoSignin'

const App = (props) => {
  return(
    <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} ></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/map" element={<FrontendAuth><Map /></FrontendAuth>}></Route>
        <Route path="/weather" element={<FrontendAuth><WeatherApp /></FrontendAuth>}></Route>
        <Route path="/calendar" element={<FrontendAuth><Calendar /></FrontendAuth>}></Route>
        <Route path="/signin" element={<NoSignin><Signin /></NoSignin>}></Route>
        <Route path="/signup" element={<NoSignin><Signup /></NoSignin>}></Route>
    </Routes>
  )
}

export default App
