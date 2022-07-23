import React from 'react'
import "./Home.css"

const Home = ({ user  }) => {
  return (
    <div className='home'>
      <div>Welcome {user}!</div>
    </div>
  )
}

export default Home