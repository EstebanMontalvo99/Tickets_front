import React, { useContext } from 'react';
import './styles/nav.css';
import { AuthContext } from '../context/AuthProvider';
const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className='nav'>
      <h2 className='nav__title'>Compra de tickets</h2>
      <div className="nav__options">
        <a href="/">Home</a>

        {user ? <a onClick={logout}>Logout</a> : <a href="/login">Login</a>}
        {user ? "" : <a href="/signup">Sign up</a>}
      </div>
    </nav>
  );
};

export default Nav;