// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects'
// const moreColors = {"Dark green":"051c00","Russian violet":"320e3b","Almond":"ebdccb","Brown":"a3320b","Mountbatten pink":"94849b"}

function App() {
  useEffect(()=> {
    // document.body.style.background='#EBDCCB';
    // document.body.style.backgroundImage='url(/desktop-bg.jpg)';
    // document.body.style.backgroundSize='100vw';
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/about/' element={<About />}></Route>
        <Route path='/resume/' element={<Resume />}></Route>
        <Route path='/projects/' element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
