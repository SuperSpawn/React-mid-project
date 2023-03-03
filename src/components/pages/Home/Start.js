import React from 'react'

import '../../../styles/reset.css'
import '../../../styles/utils.css'
import '../../../styles/Home/Start.css'


export const Start = ({ setHomeSection }) => {
  return (
    <div className='Home-Start-container page-height'>
      <h1 className='Start-title'>Welcome to <span className='Start-title-name'>The Land to the West</span></h1>
      <button onClick={() => setHomeSection(1)} className='Start-button'>Start your journey</button>
    </div>
  )
}
