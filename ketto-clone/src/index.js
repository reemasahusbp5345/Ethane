
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import DataContextProvider from './Context/DataContextProvider';

ReactDOM.render(
  <HashRouter>
  <DataContextProvider>
    <App />
  </DataContextProvider>
  </HashRouter>,
  document.getElementById('root')
);

