import React, { useRef, useState } from 'react'
import axios from 'axios'
import '../App.css';

const WeatherService = () => {
  //openweathermap.org
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '41defbbdb2ac1f0c77ea9fdc82847c6d';

  const [weather, setWeather] = useState({});
  const inputRef = useRef(null);
  const [picture, setPicture] = useState('');

  const getWeather = async () => {
      const { data } = await axios.get(`${url}${inputRef.current.value}&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      setWeather(data);
      let info = data.weather[0].icon; //01d
      setPicture(info);
      console.log(info);
    }


  //if weather exists, map through weather array and display main weather
  return (
    <>
      <div className="flex justify-center mt-5">
        <input ref={inputRef} type="text" className='bg-yellow-300 placeholder bg-black text-white w-64 h-10 border-solid border-2 border-black mr-3' placeholder='  Type city...'></input>
        <button onClick={() => getWeather()} className='w-24 border-solid bg-black text-white border-2 border-black'>Search</button>
      </div>
      
      <div class="ml-24 mr-24 flex justify-center w-auto mt-12">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                  <tr>
                      <th scope="col" class="py-4 px-6">
                          City
                      </th>
                      <th scope="col" class="py-3 px-6">
                          Status
                      </th>
                      <th scope="col" class="py-3 px-6">
                          Temperature (°C)
                      </th>
                      <th scope="col" class="py-3 px-6">
                         Picture
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {weather.name}
                      </th>
                      <td class="py-4 px-6">
                        {weather.weather && weather.weather.map(w => <h3 className='mt-2' key={w.id}>{w.main}</h3>)} 
                      </td>
                      <td class="py-4 px-6">
                        {weather?.main?.temp}
                      </td>
                      <td class="py-4 px-6">
                        <img src={`http://openweathermap.org/img/wn/${picture}.png`} alt=""/>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
    </>
  )
}

export default WeatherService