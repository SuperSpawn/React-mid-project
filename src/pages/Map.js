import React from 'react'

import '../styles/reset.css'
import '../styles/utils.css'
import '../styles/Map/Map.css'

import {MapNavbar} from '../components/pages/Map/MapNavbar'

export const Map = () => {
  //load locations array
  return (
    <div className='Map-container page-height'>
      <MapNavbar/>
      <div className='Map-locations-container'>
        locations
      </div>
    </div>
  )
}
