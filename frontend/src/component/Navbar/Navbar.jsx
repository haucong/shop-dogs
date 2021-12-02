import React from 'react'
import { Link } from 'react-router-dom'
import dogImg from '../../imgs/dog-solid-24 copy.png'
import './Navbar.css'
const Navbar = () => {
    return (
      <header className='nav-header'>
        <div className='navbar'>
            <img src={dogImg} alt='logo' />
            <div className='nav-links'>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/dogs'>Dogs</Link>
                </li>
                <li>
                  <Link to='/checkout'>Carts</Link>
                </li>
              </ul>
            </div>
        </div>
      </header>
    )
}

export default Navbar
