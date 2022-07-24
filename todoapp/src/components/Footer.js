import React from 'react'

const Footer = ({ user, logOut }) => {
  return (
    <div className='header'>
        <span>
            {user}
            <button onClick={logOut}>Log Out</button>
        </span>
    </div>
  )
}

export default Footer