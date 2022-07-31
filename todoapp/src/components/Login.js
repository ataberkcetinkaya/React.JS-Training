import React, { useRef, useContext } from 'react'
import AuthContext from '../context/AuthContext';

const Login = () => {

  const { login } = useContext(AuthContext);
  
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
        <input ref={inputRef} type="text" placeholder='Username...'></input>
        <button onClick={submit} style={{marginTop: "10px"}}>Login</button>
    </div>
  )
}

export default Login