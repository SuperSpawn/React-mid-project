import './App.css';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Admin } from './pages/Admin';
import { Map } from './pages/Map';
import { Location } from './pages/Location';
import { Store } from './pages/Store'
import { Combat } from './pages/Combat';
import { NoPage } from './pages/NoPage';

import { Loading } from './components/generic/Loading';

import axios from 'axios';

function App() {
  const localUsers = localStorage.getItem('users');
  const localMonsters = localStorage.getItem('monsters');
  const [loading, setLoading] = useState(false)

  if(!localUsers || !localMonsters) {
    setLoading(true)
    axios.get('https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/users').then((res) => {
      return res.data
    }).then((res) => {
      localStorage.setItem('users', JSON.stringify(res))
      return axios.get('https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/monsters')
    }).then((res) => {
      return res.data  
    }).then((res) => {
      localStorage.setItem('monsters', JSON.stringify(res))
      setLoading(false)
    }).catch((e) => {
      console.error(e.message);
    });
  }
  
  if(loading) return <Loading/>

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/> }/>
        <Route path='/register' element={ <Register/> }/>
        <Route path='/admin' element={ <Admin/> }/>
        <Route path='/map' element={ <Map/> }/>
        <Route path='/location' element={ <Location/> }/>
        <Route path='/store' element={ <Store/> }/>
        <Route path='/combat' element={ <Combat/> }/>
        <Route path='*' element={ <NoPage/> }/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
