import React, { useRef, useContext } from 'react'
import {AuthContext} from '../context/AuthContext';
import {useAuth} from '../context/AuthContext';

const Login = () => {

  //const { login } = useContext(AuthContext); //previous usage before useAuth()
  const { login } = useAuth();
  
  const inputRef = useRef();

  const submit = () => {
      if((inputRef.current.value).length > 2) {
        login(inputRef.current.value)
      } else {
        alert("Must be at least 3 characters")
      }
    }

  return (
    <div className='login'>
        <input  type="text" placeholder='Username...'></input>
        <button onClick={submit} style={{marginTop: "10px"}}>Login</button>
    </div>
  )
}

export default Login