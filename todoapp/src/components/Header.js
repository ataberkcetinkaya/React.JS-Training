import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Name from './Name';
import Logout from './Logout';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { logout } = useContext(AuthContext);
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
        <span >
            <Name></Name>
            <Logout logout={logout}></Logout>
        </span>
    </div>
  )
}

export default Header