// 상단의 메뉴바 component
// react-router-dom으로부터 Link를 받아온다
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </>
    );
  }
}

export default Header;
