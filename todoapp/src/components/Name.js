import React, { useContext } from 'react'
import OptionContext, { useOption } from '../context/OptionContext';

const Name = ({ user }) => {
  //const { template } = useContext(OptionContext); //previous usage before useOption()
  const { template } = useOption();

  return (
    <>
    <span style={{color: template.color}}>{user}</span>
    </>
  )
}

export default Name