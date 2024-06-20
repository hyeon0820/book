import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.css';
import Nav from '../../Nav/Nav';

function Detail() {
  const location = useLocation();
  const { state: book } = location;

  return (
    <div className="detail-location">
      <h1 className='location'>BOOK</h1>
      <Nav />
      <div className="detail-container">
        <h1 className="detail-title">{book.book_title}</h1>
        <div className="detail-content">
          <img src={book.book_img} alt={book.book_title} className="detail-img" />
          <div className="detail-info">
            <div className="detail-writer">저자: {book.book_writer}</div>
            <div className="detail-desd">{book.book_desd}</div>
            <div className="detail-price">가격: {book.book_price.toLocaleString()}원</div>
            <div className="detail-actions">
              <button className="detail-btn1">장바구니</button>
              <button className="detail-btn2">구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
