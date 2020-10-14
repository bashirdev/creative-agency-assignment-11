import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from './Navbar';
import './Header.css';
import CompanyBrandName from '../CompanyBrandName/CompanyBrandName';

const Header = () => {
    return (
        <>
        <div className='header'>
         <Navbar /> 
         <HeaderMain />
         
        </div>
        <CompanyBrandName />
        </>
    );
};

export default Header;