import React from 'react'
import '../App.css';
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/solid';
import { useWeatherOption } from '../context/WeatherContext';

export default function Home() {

  const { inputRef, getWeather, getForecast, getDaily, weather, picture, hourly, daily } = useWeatherOption();

  return (
    <>
    <div className="flex justify-center mt-5">
      <input ref={inputRef} type="text" className='bg-black text-white w-64 h-10 border-solid border-2 border-slate-400 mr-3' placeholder='  Type city...'></input>
    </div>

    <div className="flex justify-center mt-5  h-10">
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
                    <th scope="row" className="py-4 px-6 font-medium whitespace-normal text-white">
                      {weather.name}
                    </th>
                    <td className="py-4 px-6 text-white">
                      {weather.weather && weather.weather.map(w => <h3 className='mt-2' key={w.id}>{w.main}</h3>)} 
                    </td>
                    <td className="py-4 px-6 text-white">
                      {weather?.main?.temp}
                    </td>
                    <td className="py-4 px-6 text-white">
                        <img className="mx-auto" src={`http://openweathermap.org/img/wn/${picture}.png`} alt=""/>
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
                        Next Hours
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

      <div className="ml-24 mr-24 mt-12">
        <table className="w-full text-sm">
        <tbody>
            <thead className="text-xs uppercase">
                <tr>
                  <th className="py-4 px-6 bg-gray-800 text-white border border-slate-400">
                      Daily Weather
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
                      <h3 className='mt-2'>{daily[key].dt_txt.slice(0,10)}</h3>
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
