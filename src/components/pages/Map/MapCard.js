import React from 'react'

import '../../../styles/reset.css'
import '../../../styles/utils.css'
import '../../../styles/Map/MapCard.css'

export const MapCard = ({data}) => {
  return (
    <div className='MapCard-container page-height'>
      <h3>{data.name}</h3>
    </div>
  )
}
