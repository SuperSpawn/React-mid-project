import React, {useState} from 'react'

import { AdminNavbar } from '../components/pages/Admin/AdminNavbar';
import { UsersList } from '../components/pages/Admin/UsersList';
import { MonsterList } from '../components/pages/Admin/MonsterList'
import { LocationsList } from '../components/pages/Admin/LocationsList'
import { StatsList } from '../components/pages/Admin/StatsList'


import '../styles/Admin.css'

export const Admin = () => {
    const [adminSection, setAdminSection] = useState(0);


  return (
    <div className='Admin-container'>
        <AdminNavbar setAdminSection={setAdminSection}/>
        { (adminSection === 0) &&  <UsersList/>}
        { (adminSection === 1) && <LocationsList/>}
        { (adminSection === 2) &&  <MonsterList/> }
        { (adminSection === 3) &&  <StatsList/> }
    </div>
  )
}
