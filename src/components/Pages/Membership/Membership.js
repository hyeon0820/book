import React, { useState } from 'react';
import './Membership.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Membership() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            console.log("비밀번호가 일치하지 않습니다.");
            alert("비밀번호가 일치하지 않습니다.");
            window.location.reload();
            return;
        }

        try {
            const response = await axios.post('http://study.aiclub.kr:8007/signup', {
                email,
                name,
                pw: password
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("signup response:", response);
            alert("회원가입 되셨습니다.");
            navigate(`/login`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='membership_wrap'>
            <p>회원가입</p>
            <form onSubmit={handleSubmit} className='membership_form'>
                <div className='input-box'>
                    <div className='title'>이메일</div>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <label>이름</label>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>비밀번호 확인</label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className='signbtn'>회원가입 완료</button>
            </form>
        </div>
    );
}

export default Membership;