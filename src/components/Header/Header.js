import React from 'react';

import logo from '../../assets/image/logo.png'

import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <div className='header'>
        <Link to="/" className='logo'>
            <img src={logo} alt='' />
        </Link>
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='navitem'><Link to=''>Admission</Link></li>
                <li className='navitem'><Link to=''>Academics</Link></li>
                <li className='navitem'><Link to=''>Research</Link></li>
                <li className='navitem'><Link to=''>Campus</Link></li>
                <li className='navitem'><Link to=''>Contact</Link></li>
                <li className='navitem'><Link to=''>About Us</Link></li>
                <li className='navitem'><Link to="/auth">Login</Link></li>
                <li className='navitem'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </li>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header