import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/style.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(<App />, rootEl);
}

render();
reportWebVitals(console.log('sucker'));
