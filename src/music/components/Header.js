import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import styled
// { keyframes } 
from 'styled-components';

const Header = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <div className='d-flex'>
          <NavLink class='navbar-brand' to='/music'>
            <LogoImageWrapper
              className='d-inline-block align-top'
              src={logo}
              alt='BraKwaku Jr Logo'
            />
          </NavLink>
          <Link class='nav-item nav-link' to='/'>
            <h4>BraKwaku Jr</h4>
          </Link>
        </div>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <div class='navbar-nav ms-auto'>
            <Link
              class='nav-item nav-link'
              aria-current='page'
              to='/music/songs'
            >
              Songs
            </Link>
            <Link
              class='nav-item nav-link'
              aria-current='page'
              to='/music/videos'
            >
              Videos
            </Link>
            <Link
              class='nav-item nav-link'
              aria-current='page'
              to='/music/feat-artists'
            >
              Featured Artists
            </Link>
            <Link
              class='nav-item nav-link'
              aria-current='page'
              to='/music/merch'
            >
              Merch
            </Link>
            <Link
              class='nav-item nav-link'
              aria-current='page'
              to='/music/concerts'
            >
              Concerts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const LogoImageWrapper = styled.img`
  width: 45px;
  height: 45px;
`;
