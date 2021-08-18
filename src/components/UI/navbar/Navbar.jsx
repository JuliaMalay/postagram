import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
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
