import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Shop</div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="icons">
        <i className="profile-icon">👤</i>
        <i className="cart-icon">🛒</i>
      </div>
    </header>
  );
};

export default Header;
