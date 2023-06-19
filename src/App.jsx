// import logo from './logo.svg';
import './App.css';
import { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects'
import Cursor from './components/Animation/Cursor';

const colors = {
  'raisin-black': 'rgba(39, 39, 39, 1)',
  'mustard': 'rgba(254, 215, 102, 1)',
  'moonstone': 'rgba(0, 159, 183, 1)',
  'dim-gray': 'rgba(105, 103, 115, 1)',
  'antiflash-white': 'rgba(239, 241, 243, 1)'
}

function App() {
  const ref = useRef(null)

  useEffect(()=> {
    // document.body.style.background='#EBDCCB';
    // document.body.style.backgroundImage='url(/desktop-bg.jpg)';
    // document.body.style.backgroundSize='100vw';
  }, [])
  const routes = (
    <Routes>
        <Route path='/' element={<About />}></Route>
        {/* <Route path='/about/' element={<About />}></Route> */}
        <Route path='/resume/' element={<Resume />}></Route>
        <Route path='/projects/' element={<Projects />}></Route>
      </Routes>
  );

  return (
    <div>
      {routes}
      {/* <Cursor content={routes}/> */}
    </div>
  );
}

export default App;
