import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
 const  Header = ({toggle}) =>  {
    return (
        <nav
        className='flex justify-between items-center h-16 bg-white text-black shadow-sm font-mono fixed w-full left-0 top-0'
        role='navigation'
      >
        <Link to='/' className='pl-4'>
 {/* <img width="80" src={logo} /> */}
        </Link>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block  hidden'>
          <Link to='/' className='p-4'>
            Home
          </Link>
          <Link to='/menu' className='p-4'>
            Menu
          </Link>
          <Link to='/about' className='p-4'>
            About
          </Link>
          <Link to='/contact' className='p-4'>
            Contact
          </Link>
        </div>
      </nav>
    )
}

export default Header;
