import React from 'react';
import './Main.css';
import { BsCart2, BsPerson } from "react-icons/bs";
import Nav from "../../Nav/Nav";
import Todaybook from '../Todaybook/Todaybook';
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <div className='main_wrap'>
      <div className='top-section'>
        <h1>BOOK</h1>
        <div className='search-bar'>
          <input type='text' placeholder='검색어를 입력해주세요' />
          <button type='submit' className='search-btn'>검색</button>
        </div>
        <div>
          <BsCart2 size={45} className='icon' />
        </div>
        <NavLink to={'../mypage'}>
        <div>
          <BsPerson size={45} className='icon' />
        </div>
        </NavLink>
      </div>
      <div>
        <Nav />
        <Todaybook />
      </div>
    </div>
  );
}

export default Main;
