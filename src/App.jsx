import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';

const moreColors = {"Dark green":"051c00","Russian violet":"320e3b","Almond":"ebdccb","Brown":"a3320b","Mountbatten pink":"94849b"}

function App() {
  useEffect(()=> {
    // document.body.style.background='#EBDCCB';
    document.body.style.backgroundImage='url(/desktop-bg.jpg)';
    document.body.style.backgroundSize='100vw';
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
    </Routes>
  );
}

export default App;
