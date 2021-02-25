import React from 'react';
import ReactDOM from 'react-dom';

//import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import {IconSettings } from '@salesforce/design-system-react'
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <IconSettings iconPath="/icons">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IconSettings>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
