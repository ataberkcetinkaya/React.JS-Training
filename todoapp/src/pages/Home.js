import React, { useContext} from 'react'
import "./Home.css"
import {AuthContext} from '../context/AuthContext';
import {useAuth} from '../context/AuthContext';

const Home = () => {

  //const { user } = useContext(AuthContext); //previous usage before useAuth()
  const { user } = useAuth();
  return (
    <div className='home'>
      <div>Welcome {user}!</div>
    </div>
  )
}

export default Home