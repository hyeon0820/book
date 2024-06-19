import React, { useEffect, useState } from 'react';
import './Header.css';
import { AiOutlineBook } from "react-icons/ai"; 
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://study.aiclub.kr:8007/users', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log("사용자 : ",response);
          setUser(response.data);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    alert("로그아웃 되셨습니다.");
    setUser(null); // 사용자 상태 초기화
  };

  return (
    <header style={headerStyle}>
      <div className='homelogo'>
        <NavLink to='/'> 
          <AiOutlineBook size={40} color="black" /> 
        </NavLink>
      </div>
      <div style={buttonContainerStyle}>
        {user ? (
          <>
            <div className='btnlogin'>{user.name}님</div>
            <div className='btnmembership' onClick={handleLogout}>로그아웃</div>
          </>
        ) : (
          <>
            <NavLink to='/login'>
              <div className='btnlogin'>로그인</div> 
            </NavLink>
            <NavLink to='/signup'>
              <div className='btnmembership'>회원가입</div>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '1px solid #ccc',
};

const buttonContainerStyle = {
  textAlign: 'right',
};

export default Header;
