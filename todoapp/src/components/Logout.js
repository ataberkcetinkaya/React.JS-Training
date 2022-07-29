import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Name from './Name';
import AuthContext from '../context/AuthContext';

const Logout = () => {
    const { user, logout } = useContext(AuthContext);
  return (
    <span>
        <Name user={user}></Name>
        <button onClick={logout}><Link to="/" className='linkBtn'>Log Out</Link></button>
    </span>
  )
}

export default Logout