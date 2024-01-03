
import './App.css';

import Home from './pages/Home';


import {BrowserRouter,Routes,Route} from 'react-router-dom'

import About from './pages/About';
import MainPage from './pages/MainPage';
import PersonalProfile from './pages/PersonalProfile';
import Trash from './pages/Trash';









function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
<Route index element={<Home/>}/>
<Route path='/home' element={<Home/>}/>

<Route path='/about' element={<About/>}/>
<Route path='/main' element={<MainPage/>}/>
<Route path='/profile' element={<PersonalProfile/>}/>
<Route path='/trash' element={<Trash/>}/>

 </Routes>
 </BrowserRouter> 




   </div>

  );
}

export default App;
