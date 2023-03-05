import React from 'react'

import '../styles/reset.css'
import '../styles/utils.css'
import '../styles/Map/Map.css'

import { Loading } from '../components/generic/Loading'

import {MapNavbar} from '../components/pages/Map/MapNavbar'
import { MapLocations } from '../components/pages/Map/MapLocations'

export const Map = () => {
  //load locations array
  

  return (
    <div className='Map-container page-height'>
      <MapNavbar/>
    </div>
  )
}
