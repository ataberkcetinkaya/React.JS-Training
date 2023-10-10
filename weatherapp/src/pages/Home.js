import React from 'react'
import '../App.css';
import { useWeatherOption } from '../context/WeatherContext';

export default function Home() {

  const { inputRef, getWeather, getForecast, getDaily, picture, weather, hourly, daily } = useWeatherOption();

  const getAll = () => {
    getWeather();
  };

  const currentDate = new Date();

  return (
    <>
    <div className="flex justify-center mt-8">
      <input ref={inputRef} type="text" className='w-64 h-10 border border-gray-300 rounded-lg p-2 text-center' placeholder='Type city...'></input>
    </div>

    <div className="flex justify-center mt-5 h-10">
      <button onClick={() => getAll()} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md'>Check Weather</button>
    </div>

    <div class="mx-auto max-w-lg mt-10">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Weather Forecast</h2>
        <div class="mb-4">
          <div class="text-lg text-gray-600">
            <span class="block">Location: {weather.name}</span>
            <span class="block">Date: {currentDate.toDateString()}</span>
          </div>
          <div class="text-3xl text-blue-500 font-bold mt-2 sm:mt-0">{weather?.main?.temp}</div>
        </div>
        <div class="mb-4">
          <div class="text-gray-600">
            <span class="block">Condition: {weather?.weather?.[0]?.main}</span>
            <span class="block">Wind: {weather?.wind?.speed}</span>
            <span class="block">Humidity: {weather?.main?.humidity}</span>
          </div>
          <img src={`http://openweathermap.org/img/wn/${picture}.png`} alt="Weather Icon" class="w-12 h-12 mt-2 sm:mt-0" />
        </div>
      </div>
    </div>
  </>
  )
}
