import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import Loading from './components/Loading';

ReactDOM.render(
  <React.StrictMode>
    <Loading/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
