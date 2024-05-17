import React, { useContext } from 'react';
import './styles/nav.css';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className='nav'>
      <h2 className='nav__title'>Compra de tickets</h2>
      <div className="nav__options">
        <Link to="/">Home</Link>

        {user ? <Link to='/' onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>}
        {user ? "" : <Link to="/signup">Sign up</Link>}
      </div>
    </nav>
  );
};

export default Nav;