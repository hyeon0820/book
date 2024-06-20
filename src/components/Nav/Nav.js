import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


function Nav() {
    
    return (
        <div> 
            <div className='nav_location'>
                <NavLink to={'../allbook'} style={{ textDecoration: "none"}}>
                <div className='all'>전체도서</div>
                </NavLink>
                <NavLink to={'../bestbook'} style={{ textDecoration: "none"}}>
                <div className='best'>베스트도서</div>
                </NavLink>
                <NavLink to={'../newbook'} style={{ textDecoration: "none"}}>
                <div className='new'>신작도서</div>
                </NavLink>
                <NavLink to={'../koreabook'} style={{ textDecoration: "none"}}>
                <div className='korea'>국내도서</div>
                </NavLink>
                <NavLink to={'../foreignbook'} style={{ textDecoration: "none"}}>
                <div className='abroad'>해외도서</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Nav;