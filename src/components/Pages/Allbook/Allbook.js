import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Allbook.css';

function Allbook() {
    const [item, setItem] = useState([]);

    useEffect(() => {
      const todaybookAPI = async () => {
        try {
          const response = await axios.get('http://study.aiclub.kr:8007/book');
          console.log("book", response);
          setItem(response.data);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      };
  
      todaybookAPI();
    }, []);

      // 문자열이 일정 길이를 초과하면 ...으로 치환하는 함수
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  // 숫자를 만원 단위 문자열로 변환하는 함수
  const formatPrice = (price) => {
    return `${price.toLocaleString()}원`;
  };

  
    
    return (
        <div> 
            {item.length > 0 ? (
            <ul className="book-list">
            {item.map((book, index) => (
                <div key={index} className='book-location'>
                    <img src={book.book_img} alt={book.book_title} className='book-item' />
                    <div className='book-information'>
                    <div className='book-title'>{book.book_title}</div>
                    <div className='book-writer'>{book.book_writer}</div>
                    <div className='book-desd'>{truncateText(book.book_desd, 50)}</div>
                    </div>
                    <div className='book-buy'>
                    <div className='book-price'>{formatPrice(book.book_price)}</div>
                    <div className='book-btn1'>장바구니</div>
                    <div className='book-btn2'>구매하기</div>
                    </div>
                </div>
            ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}

export default Allbook;