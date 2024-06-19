import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="Footer_wrap">
           <div className = "Footer">

           <ul className = 'oneline'>
            <li className="line1">회사소개</li>
            <li className="line1">서비스소개 </li>
            <li className="line1"> 광고및제휴 </li>

            </ul>
            <ul className = 'twoline'>
            <li className="line2"> 개인정보처리방침</li>
            <li className="line2"> 이용약관 </li>
            <li className="line2"> 도움말  </li>
            <li className="line2"> 공지사항 </li>
            </ul>    
          
           <div className='threeline'>Copyright ⓒ team07. All Rights Reserved. </div>
        </div>
        </div>
    )
}

export default Footer;