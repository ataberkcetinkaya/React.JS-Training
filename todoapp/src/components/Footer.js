import React, { useContext } from 'react'
import Name from './Name';
import Logout from './Logout';
import {AuthContext} from '../context/AuthContext';
import {useAuth} from '../context/AuthContext';
import OptionContext, { useOption } from '../context/OptionContext';

const Footer = () => {
  //const { logout } = useContext(AuthContext); //previous usage before useAuth()
  const { logout } = useAuth();

  //const { template } = useContext(OptionContext); //previous usage before useOption()
  const { template } = useOption();

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