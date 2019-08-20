import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

const ShopHeader = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const CartLink = styled.div`
  align-self: center;
  font-size: 1.3rem;
  padding-right: 1rem;
`;

const Header = ({ totalSum, totalItems }) => {
  return (
    <ShopHeader>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/cart">
        <CartLink>
          <i />
          {totalItems} items (${totalSum})
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
