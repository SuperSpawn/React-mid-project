import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Admin } from './pages/Admin';
import { Map } from './pages/Map';
import { Location } from './pages/Location';
import { Store } from './pages/Store'
import { Combat } from './pages/Combat';
import { NoPage } from './pages/NoPage';

import { generateName, generateRandomInt } from './logic/logic';

//import useFetch from './components/hooks/useFetch';

function App() {

  const namePrefixes = ['Tu', "Za", "Qui", "Lo", "Ki", "Go", "Ko", "Hi"]
  const nameMiddle = ['la', 'wa', 'es', 'ki', "ko", 'to']
  const nameSuffixes = ['', 'ek', 'mo', 'lo', 'me', 'mi']
  const elements = ['Earth', "Water", "Wind", "Electricity", 'Fire', 'Magic']
  
  //set avatar
  for(let i = 0; i < 40; ++i) {
    const monster = {}
    monster.name = generateName(namePrefixes, nameMiddle, nameSuffixes, '');
    monster.avatar = 'https://api.dicebear.com/5.x/pixel-art/svg?seed=' + i.name;
    monster.stats[0] = generateRandomInt(10)//strength
    monster.stats[1] = generateRandomInt(10)//speed
    monster.stats[2] = generateRandomInt(10)//endurance
    monster.stats[3] = generateRandomInt(10)//perception
    monster.stats[4] = generateRandomInt(10)//luck
    monster.type = elements[generateRandomInt(elements.length)];
    monster.hp = monster.stats[0] + monster.stats[2] * 10; 


    fetch('https://6400744e9f8449102991251c.mockapi.io/TheLandtoTheWest/monsters', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(monster)})
      .then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
        throw new Error('Error: couldnt upload')
      }).then(mon => {
        // do something with the new task
        console.log(mon)
      }).catch(error => {
        // handle error
        console.error(error.message)
      })
  }
    

    







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



/*
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
*/
