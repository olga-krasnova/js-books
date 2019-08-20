import React from 'react';
import styled from 'styled-components';
import books from '../../../images/books.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  background-image: url(${books});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

const LogoText = styled.span`
  color: black;
  font-size: 20px;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon />
      <LogoText>Book Store</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
