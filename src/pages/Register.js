import React from 'react'

import '../styles/reset.css'
import '../styles/utils.css'
import '../styles/Home/LoginInput.css'
import '../styles/Register.css'


export const Register = () => {
  return (
    <div className='Register-container page-height'>
      <div className='Register-input-container Home-LoginInput-container'>
        <p>Full name</p>
        <input type="text" placeholder='e.g. John Doe' />
        <p>Email</p>
        <input type="email" placeholder='e.g. john@doe.com'/>
        <p>Password</p>
        <input type="password" placeholder='e.g. 123'/>
        <p>Confirm password</p>
        <input type="password"/>
        <p>Start monster</p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className='Home-Login-buttons-container'>
          <button>Register</button>
        </div>
      </div>
    </div>
  )
}
