import React from 'react';
import styled from 'styled-components';

const ShopLogo = styled.div`
  font-family: "Playfair Display", Georgia, serif;
  font-size: 2.5rem;
  padding-left: 1rem;
`;

const Logo = () => {
  return (
    <ShopLogo>Book Store</ShopLogo>
  )
};

export default Logo;
