import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

export const colors = {
  'silver': 'rgba(196, 187, 175, 1)',
  'walnut-brown': 'rgba(115, 101, 89, 1)',
  'liver': 'rgba(92, 71, 66, 1)',
  'caribbean-current': 'rgba(8, 96, 95, 1)',
  'ucla-blue': 'rgba(34, 116, 165, 1)',
}

const style = {
    background:colors['silver'],
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
