import React, { useContext } from 'react'
import Name from './Name';
import Logout from './Logout';
import AuthContext from '../context/AuthContext';

const Footer = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className='header'>
        <span>
            <Name></Name>
            <Logout logout={logout}></Logout>
        </span>
    </div>
  )
}

export default Footer