import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './NavBar.scss';

const NavBar = () => {
    const router = useNavigate();

    return (
        <div className="topnav" id="myTopnav">
            <div onClick={() => router(RouteNames.SHOPS)}>Shops</div>
            <div onClick={() => router(RouteNames.CARD)} className='card'>Shopping Card</div>
            <div onClick={() => router(RouteNames.HISTORY)} className='card'>History</div>
        </div>
    );
};

export default NavBar;
