import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalStyle,FontLink }from './Globalstyle';
import { MyContextProvider } from './Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontLink/>
    <GlobalStyle/>
    <MyContextProvider>
    <App />
    </MyContextProvider>
  </React.StrictMode>
);
