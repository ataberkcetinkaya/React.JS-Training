import React from 'react';
import './App.css';
import Home from './pages/Home';
import { WeatherProvider } from './context/WeatherContext';

function App() {

  return (
      <>
      <WeatherProvider>
        <Home></Home>
      </WeatherProvider>
      </>
  );
}

export default App;
