import logo from './logo.svg';
import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import DownloadIcon from '@mui/icons-material/Download';
import { styled } from '@mui/material/styles';

const colors = {"Dark green":"051c00","Reseda green":"7e9181","French gray":"c7cedb","Cadet gray":"a0aab2","Mountbatten pink":"94849b"}
const moreColors = {"Dark green":"051c00","Russian violet":"320e3b","Almond":"ebdccb","Brown":"a3320b","Mountbatten pink":"94849b"}

function App() {
  return (
    <>
      <NavBar />
      <Box height='100vh'>
        hello world!
      </Box>
    </>
  );
}

export default App;
