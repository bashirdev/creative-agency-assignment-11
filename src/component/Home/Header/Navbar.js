import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className='container'>
           <nav className="navbar navbar-expand-lg navbar-light  mt-3">
  <Link className="navbar-brand" to='/'><img style={{height:'47px'}} src={logo} alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-4" to='/'>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-4" to='/portfolio'>Our Portfolio</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-4" to='/team'>Our Team</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-4 " to='/contact'>Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-4 btn btn-dark btn-lg text-white pl-4 pr-4 pt-1 pb-1 " to='/login'>Login</Link>
      </li>
    </ul>
  </div>
</nav> 
        </div>
    );
};

export default Navbar;