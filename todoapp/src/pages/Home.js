import React, { useContext } from 'react'
import "./Home.css"
import AuthContext from '../context/AuthContext';

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className='home'>
      <div>Welcome {user}!</div>
    </div>
  )
}

export default Home