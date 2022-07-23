import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ user, logOut }) => {
  return (
    <div className='header'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/list">List</Link>
            </li>
        </ul>
        <span>
            {user}
            <button onClick={logOut}>Log Out</button>
        </span>
    </div>
  )
}

export default Header