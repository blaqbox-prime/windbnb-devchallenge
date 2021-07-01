import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import FilterProvider from './contexts/FilterContext';


ReactDOM.render(
      <FilterProvider>
    <App />
    </FilterProvider>
  ,
  document.getElementById('root')
);
