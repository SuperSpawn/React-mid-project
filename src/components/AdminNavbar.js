import React from 'react'

export const AdminNavbar = ({setAdminSection}) => {
  return (
    <div className='AdminNavbar-container'>
        <button onClick={() => setAdminSection(0)} >Users</button>
        <button onClick={() => setAdminSection(1)} >Locations</button>
        <button onClick={() => setAdminSection(2)} >Monsters</button>
        <button onClick={() => setAdminSection(3)} >Stats</button>
    </div>
  )
}
