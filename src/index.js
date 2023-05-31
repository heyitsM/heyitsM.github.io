import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// const style = {
//   backgroundImage:'url(/backgrounds/desktop-bg.jpg)', 
//   backgroundSize:'cover', 
//   backgroundRepeat:'no-repeat', 
//   backgroundAttachment:'fixed'
// }

const style = {
    // background:'#EBDCCB',
    // background: '#A3320B'
    background:'#7E9181',
    // background:'#051c00'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={style}>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
