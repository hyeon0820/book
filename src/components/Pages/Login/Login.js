import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://study.aiclub.kr:8007/login', new URLSearchParams({
        email: email,
        pw: password,
      }));

      if (response.status === 200) {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.data.access_token);
        alert("로그인 되었습니다.");
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data.detail : error.message);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className='login_wrap'>
      <h1>로그인</h1>
      <div className='login_form'>
        <input 
          type='text' 
          placeholder='아이디' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type='password' 
          placeholder='비밀번호' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className='options'>
          <NavLink to='/' style={{ textDecoration: 'none' }}>아이디찾기</NavLink> | 
          <NavLink to='/' style={{ textDecoration: 'none' }}>비밀번호찾기</NavLink>
        </div>
        <button className='loginbtn' onClick={handleLogin}>로그인</button>
        <NavLink to='../signup' className='signup' style={{ textDecoration: 'none' }}>회원가입</NavLink>
        <div className='sns_login'>
          <button className='sns-btn naver'></button>
          <button className='sns-btn kakao'></button>
          <button className='sns-btn google'></button>
          <p>sns 계정으로 로그인</p>
        </div>
        <button className='non-member-order'>비회원 주문조회</button>
      </div>
    </div>
  );
}

export default Login;
