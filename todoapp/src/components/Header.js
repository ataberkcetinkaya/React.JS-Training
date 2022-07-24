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
            <button onClick={logOut}><Link to="/" className='linkBtn'>Log Out</Link></button>
        </span>
    </div>
  )
}

export default Header