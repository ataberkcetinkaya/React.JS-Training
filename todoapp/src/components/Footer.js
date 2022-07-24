import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ user, logOut }) => {
  return (
    <div className='header'>
        <span>
            {user}
            <button onClick={logOut}><Link to="/" className='linkBtn'>Log Out</Link></button>
        </span>
    </div>
  )
}

export default Footer