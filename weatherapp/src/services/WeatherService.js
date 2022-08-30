import React, { useRef, useState } from 'react'
import axios from 'axios'
import '../App.css';

const WeatherService = () => {
  //openweathermap.org
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState({});
  const inputRef = useRef(null);

  const getWeather = async () => {
      const { data } = await axios.get(`${url}${inputRef.current.value}&appid=${apiKey}`) //wait for data to reach (async and await)
      setWeather(data);
  }

  return (
    <>
      <div className="flex justify-center mt-5">
        <input ref={inputRef} type="text" className='w-64 h-10 border-solid border-2 border-black mr-3' placeholder='Type city...'></input>
        <button onClick={() => getWeather()} className='w-24 border-solid border-2 border-black'>Search</button>
      </div>
      <div className="flex flex-col text-center mt-5 text-2xl">
        <h3 className='mt-5'>{weather.name}</h3>
        <h3 className='mt-2'>{weather?.main?.temp}</h3>
      </div>
    </>
  )
}

export default WeatherService