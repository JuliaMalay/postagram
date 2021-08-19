import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context';
import Button from '../button/Button';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return (
    <div className="navbar">
      <Button onClick={logout}>Выйти</Button>
      <div className="navbar__links">
        <Link className="navbar__link" to="/about">
          О сайте
        </Link>
        <Link className="navbar__link" to="/posts">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
