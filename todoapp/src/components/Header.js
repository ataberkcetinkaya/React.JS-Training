import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Name from './Name';
import Logout from './Logout';
import OptionContext, { useOption } from '../context/OptionContext';
import ChangeTemplate from './ChangeTemplate';

const Header = () => {
  const { template } = useContext(OptionContext); //previous usage before useOption()

  return (
    <div className='header' style={{backgroundColor: template.background}}>
        <ul>
            <li>
                <Link to="/" style={{color: template.color}}>Home</Link>
            </li>
            <li>
               <Link to="/list" style={{color: template.color}}>List</Link>
            </li>
        </ul>
        <ChangeTemplate></ChangeTemplate>
        <span >
            <Name ></Name>
            <Logout ></Logout>
        </span>
    </div>
  )
}

export default Header