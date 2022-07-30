import React, { useContext } from 'react'
import Name from './Name';
import Logout from './Logout';
import AuthContext from '../context/AuthContext';
import OptionContext from '../context/OptionContext';

const Footer = () => {
  const { logout } = useContext(AuthContext);
  const { template } = useContext(OptionContext);

  return (
    <div className='header' style={{backgroundColor: template.background}}>
        <span>
            <Name></Name>
            <Logout logout={logout}></Logout>
        </span>
    </div>
  )
}

export default Footer