import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import BodyGrid from './components/BodyGrid';

const moreColors = {"Dark green":"051c00","Russian violet":"320e3b","Almond":"ebdccb","Brown":"a3320b","Mountbatten pink":"94849b"}

function App() {
  useEffect(()=> {
    // document.body.style.background='#EBDCCB';
    document.body.style.backgroundImage='url(/desktop-bg.jpg)';
    document.body.style.backgroundSize='100vw';
  }, [])

  return (
    <>
      <TopBar />
      <BodyGrid />
    </>
  );
}

export default App;
