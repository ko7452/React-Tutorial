import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.jsx, 확장자 버전으로 import 해준다.
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
