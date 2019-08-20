import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

const ShopHeader = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
`;

const CartLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: black;

  span {
    margin-left: 5px;
    color: #d21115;
  }
`;

const Header = ({ totalItems }) => {
  return (
    <ShopHeader>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/cart">
        <CartLink>
          <i className="material-icons">shopping_cart</i>
          <span>{totalItems > 0 ? `${totalItems}` : ''}</span>
        </CartLink>
      </Link>
    </ShopHeader>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, itemsTotal } }) => {
  return {
    totalSum: orderTotal,
    totalItems: itemsTotal,
  };
};

export default connect(mapStateToProps)(Header);
