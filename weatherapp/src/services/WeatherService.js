import React, { useRef, useState } from 'react'
import axios from 'axios'
import '../App.css';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid'

const WeatherService = () => {
  //openweathermap.org
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '41defbbdb2ac1f0c77ea9fdc82847c6d';

  const [weather, setWeather] = useState({});
  const inputRef = useRef(null);
  const [picture, setPicture] = useState('');
  const [hourly, setHourly] = useState({});
  const [daily, setDaily] = useState({});

  const getWeather = async () => {
      const { data } = await axios.get(`${url}${inputRef.current.value}&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      setWeather(data);
      let info = data.weather[0].icon; //01d
      setPicture(info);
    }

    const getForecast = async () => {
      const { data } = await axios.get(`${url2}${inputRef.current.value}&cnt=3&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      setHourly(data);
    }

    const getDaily = async () => {
      const { data } = await axios.get(`${url2}${inputRef.current.value}&cnt=33&appid=${apiKey}&units=metric`) //wait for data to reach (async and await)
      const dailyWeather = data.list.filter(item => item.dt_txt.includes('12:00:00')); //im getting the 12 pm bc that time usually stands for the day temperature
      setDaily(dailyWeather);
    }


  //if weather exists, map through weather array and display main weather
  return (
    <>
      <div className="flex justify-center mt-5">
        <input ref={inputRef} type="text" className='bg-black text-white w-64 h-10 border-solid border-2 border-slate-400 mr-3' placeholder='  Type city...'></input>
        <button onClick={() => getWeather()} className='w-24 border-solid bg-black text-white border-2 border-slate-400'>Current</button>
        <button onClick={() => getForecast()} className='ml-5 w-28 border-solid bg-black text-white border-2 border-slate-400'>Next Hours</button>
        <button onClick={() => getDaily()} className='ml-5 w-28 border-solid bg-black text-white border-2 border-slate-400'>Get Daily</button>
      </div>
      
      <div className="ml-24 mr-24 flex justify-center mt-12">
          <table className="w-full text-sm text-center  ">
              <thead className="text-xs uppercase bg-gray-700 text-gray-100">
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
                  <tr className="border-b bg-gray-800 border-slate-400 text-center ">
                      <th scope="row" className="py-4 px-6 font-medium  whitespace-normal text-white">
                        {weather.name}
                      </th>
                      <td className="py-4 px-6 text-white">
                        {weather.weather && weather.weather.map(w => <h3 className='mt-2' key={w.id}>{w.main}</h3>)} 
                      </td>
                      <td className="py-4 px-6 text-white">
                        {weather?.main?.temp}
                      </td>
                      <td className="py-4 px-6 text-white">
                          <img class="mx-auto" src={`http://openweathermap.org/img/wn/${picture}.png`} alt=""/>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>

        <div className="ml-24 mr-24  mt-12">
          <table className="w-full text-sm text-center">
            <tbody>
              <thead className="text-xs uppercase">
                  <tr>
                      <th className="bg-gray-800 text-white py-4 px-6 border border-slate-400">
                          Weather for Next Hours
                          <ClockIcon className='h-7 w-7 mx-auto mt-3'></ClockIcon>
                      </th>
                  </tr>
              </thead>
            </tbody>

              <tbody>
                  {hourly.list && hourly.list.map(d =>
                    <tr className="border-b bg-gray-800 border-slate-400 text-white">
                       <td className="py-4 px-6">
                        <h3 className='mt-2' key={d.dt}>{d.dt_txt}</h3>
                      </td>
                      <td className="py-4 px-6">
                        <h3 className='mt-2' key={d.main.temp}>{d.main.temp}°C</h3>
                      </td>
                    </tr> 
                  )}
              </tbody>
          </table>
        </div>

        <div className="ml-24 mr-24 mt-12 ">
          <table className="w-full text-sm ">
          <tbody>
              <thead className="text-xs uppercase ">
                  <tr>
                      <th className="py-4 px-6 bg-gray-800 text-white border border-slate-400 ">
                          Daily Weather for 5 Days
                          <CalendarDaysIcon className="h-7 w-7 mx-auto mt-3"></CalendarDaysIcon>
                      </th>
                  </tr>
              </thead>
           </tbody>

              <tbody>
                {Object.keys(daily).map((key, index) => {
                  return (
                  <tr className="border-b border-slate-400 bg-gray-800">
                      <div className='h-20 text-center mt-5 text-white'>
                        <h3 className='mt-2'>{daily[key].dt_txt}</h3>
                        <h3 className='mt-2'>{daily[key].main.temp}°C</h3>
                      </div> 
                  </tr>
                  )
                  })}
              </tbody>
          </table>
        </div>
    </>
  )
}

export default WeatherService