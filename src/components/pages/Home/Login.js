import React,{useRef} from 'react'
import { Link } from 'react-router-dom'

import '../../../styles/reset.css'
import '../../../styles/utils.css'
import '../../../styles/Home/LoginInput.css'
import '../../../styles/Home/Login.css'

export const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validateLogin = () => {
    //TODO: validate login information
  }

  return (
    <div className='Home-Login-container page-height'>
      <div className='Home-LoginInput-container'>
        <p>Email</p>
        <input ref={emailRef} type="email" placeholder="e.g. john@doe.com"/>
        <p>Password</p>
        <input ref={passwordRef} type="password" placeholder='e.g. 123'/>
      </div>
      <div className='Home-Login-buttons-container'>
        <button onClick={validateLogin} >Login</button>
      </div>
      <Link to="/register"><span className='Home-Login-register-link'>Don't have an account? register a new account</span></Link>
    </div>
  )
}
