//index.js is entry point to React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//ReactDom is rendering app component into this component with Id root
//App being loaded here is App.js
ReactDOM.render(<App />, document.getElementById('root'));

