import React, { useContext } from 'react'
import OptionContext from '../context/OptionContext';

const Name = ({ user }) => {
  const { template } = useContext(OptionContext);
  return (
    <>
    <span style={{color: template.color}}>{user}</span>
    </>
  )
}

export default Name