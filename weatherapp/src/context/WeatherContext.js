import axios from "axios";
import { createContext, useContext, useState, useEffect, useRef } from "react";

const WeatherContext = createContext();

  const useWeatherOption  = () => useContext(WeatherContext);

  const WeatherProvider = ({ children }) => {

    //openweathermap.org
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const apiKey = '41defbbdb2ac1f0c77ea9fdc82847c6d';

    const inputRef = useRef(null);

    const [picture, setPicture] = useState('');

    const [weather, setWeather] = useState({});
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

      const WeatherContextValues = {
        inputRef,
        getWeather,
        getForecast,
        getDaily,
        picture,
        weather,
        hourly,
        daily,
      }
  
    return(
      <WeatherContext.Provider value={WeatherContextValues}>
        {children}
      </WeatherContext.Provider>
    )
  }
  
export { WeatherProvider, useWeatherOption };