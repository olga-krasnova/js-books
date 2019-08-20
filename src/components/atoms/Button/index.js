import React from 'react';
import styled from 'styled-components';

const ShopButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  line-height: 1.2;
  transition: all 0.5s ease;
  font-size: 12px;
  border: none;
  font-weight: 600;
  outline: 0;
  text-transform: uppercase;
  background-color: #d21115;
  color: white;
  margin-top: 20px;
  border-radius: 3px;

  &:hover {
    background-color: #b51519;
  }
`;

const Button = ({ text, type, onClick }) => {
  return (
    <ShopButton type={type} onClick={onClick}>
      {text}
    </ShopButton>
  );
};

export default Button;
