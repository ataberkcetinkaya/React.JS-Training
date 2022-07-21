import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
            Name
        </span>
    </div>
  )
}

export default Header