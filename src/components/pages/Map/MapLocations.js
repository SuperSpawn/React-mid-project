import React from 'react'
import { MapCard } from './MapCard'

import '../../../styles/reset.css'
import '../../../styles/utils.css'
import '../../../styles/Map/MapLocations.css'


export const MapLocations = ({locations}) => {
    console.log(locations)
  return (
    <div className='MapLocations-container'>
        {
            locations.map((location, index) => {
                return (
                    <MapCard key={index} data={location} />
                )
            })
        }
    </div>
  )
}
