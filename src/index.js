import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './Component/frame';

window.page = "mission";
window.progress = 0;
window.item = 6;
window.story = 1;

ReactDOM.render(
  <Frame />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
