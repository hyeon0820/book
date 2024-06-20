import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyPage.css'; // 스타일링을 위한 CSS 파일
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
        const token = localStorage.getItem('token'); // 로그인 후 저장된 토큰을 가져옵니다.
        if(!token){
            alert("로그인 후 이용해주세요");
            navigate("/login");
        }
      try {
        const response = await axios.get('http://study.aiclub.kr:8007/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("response",response);
        setUserInfo(response.data);
        setCartItems(response.data.cart_items || []); // cart_items가 없는 경우 빈 배열로 설정
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>; // userInfo가 null인 경우 로딩 표시
  }

  return (
    <div className="mypage">
      <h1>마이 페이지</h1>
      <div className='user-book-location'>
      <div className="user-info">
        <h2>내 정보</h2>
        <p>이메일 : {userInfo.email}</p>
        <p>이름 : {userInfo.name}</p>
      </div>
      <div className="cart-items">
        <h2>장바구니</h2>
        <div>
          {cartItems.length === 0 ? (
            <div className='empty-cart'>장바구니에 저장된 책이 없습니다.</div>
          ) : (
            cartItems.map((itemId) => (
              <div key={itemId}>Book ID: {itemId}</div>
            ))
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyPage;
