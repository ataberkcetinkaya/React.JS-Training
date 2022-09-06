import React, { useRef, useState } from 'react'
import axios from 'axios'
import '../App.css';

const WeatherService = () => {
  //openweathermap.org
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '41defbbdb2ac1f0c77ea9fdc82847c6d';

  const [weather, setWeather] = useState({});
  const inputRef = useRef(null);
  const [picture, setPicture] = useState('');
  const [daily, setDaily] = useState({});

  const getWeather = async () => {
      const { data } = await axios.get(`${url}${inputRef.current.value}&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      setWeather(data);
      console.log(data);
      let info = data.weather[0].icon; //01d
      setPicture(info);
    }

    const getForecast = async () => {
      const { data } = await axios.get(`${url2}${inputRef.current.value}&cnt=3&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      setDaily(data);
      console.log(data);
    }

  //if weather exists, map through weather array and display main weather
  return (
    <>
      <div className="flex justify-center mt-5">
        <input ref={inputRef} type="text" className='bg-yellow-300 placeholder bg-black text-white w-64 h-10 border-solid border-2 border-black mr-3' placeholder='  Type city...'></input>
        <button onClick={() => getWeather()} className='w-24 border-solid bg-black text-white border-2 border-black'>Current</button>
        <button onClick={() => getForecast()} className='ml-5 w-28 border-solid bg-black text-white border-2 border-black'>Next Hours</button>
      </div>
      
      <div className="ml-24 mr-24 flex justify-center mt-12">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                  <tr>
                      <th scope="col" className="py-4 px-6">
                          City
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Status
                      </th>
                      <th scope="col" className="py-3 px-6">
                          Temperature (°C)
                      </th>
                      <th scope="col" className="py-3 px-6">
                         Picture
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {weather.name}
                      </th>
                      <td className="py-4 px-6">
                        {weather.weather && weather.weather.map(w => <h3 className='mt-2' key={w.id}>{w.main}</h3>)} 
                      </td>
                      <td className="py-4 px-6">
                        {weather?.main?.temp}
                      </td>
                      <td className="py-4 px-6">
                        <img src={`http://openweathermap.org/img/wn/${picture}.png`} alt=""/>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
        <div className="flex flex-col w-52 mx-auto ">
            {daily.list && daily.list.map(d =>
             <div className='h-20 text-center mt-5 border border-black dark:bg-gray-800 text-white'>
              <h3 className='mt-2' key={d.dt}>{d.dt_txt}</h3>
              <h3 className='mt-2' key={d.main.temp}>{d.main.temp}°C</h3>
             </div> 
             )}
        </div>
    </>
  )
}

export default WeatherService