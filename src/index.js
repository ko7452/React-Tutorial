import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// App.jsx, 확장자 버전으로 import 해준다.
import App from './App.jsx';
// BrowserRouter를 react-router-dom으로부터 불러온다
import { BrowserRouter } from 'react-router-dom';

// 바뀌어야 되는 페이지인 <App />를 BrowserRouter로 감싸준다
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
