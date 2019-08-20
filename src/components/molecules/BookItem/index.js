import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const Item = styled.div`
  display: flex;
  margin: 15px 0;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 120px;
  margin-right: 30px;

  img {
    max-width: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  align-items: flex-start;
  margin-top: 18px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 20px;
  color: #d21115;
`;

const BookItem = ({ book, onAddedToCart }) => {
  const { title, author, price, image } = book;
  return (
    <Item>
      <ImageWrapper>
        <img src={image} alt="Book cover" />
      </ImageWrapper>
      <Details>
        <Title>{title}</Title>
        <div>{author}</div>
        <Price>{price}</Price>
        <Button type="button" text="Add to cart" onClick={onAddedToCart} />
      </Details>
    </Item>
  );
};

export default BookItem;
