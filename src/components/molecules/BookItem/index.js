import React from 'react';
import styled from 'styled-components';

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
  justify-content: space-between;
  padding-bottom: 10px;
  align-items: flex-start;
`;

const Title = styled.span`
  font-size: 1.2rem;
`;

const Price = styled.div`
  font-size: 1.4rem;
`;

const BookItem = () => {
  // const { title, author, price, image } = book;
  return (
    <Item>
      <ImageWrapper>
        <img src="" alt="Book cover" />
      </ImageWrapper>
      <Details>
        <Title>title</Title>
        <div>author</div>
        <Price>price</Price>
        <button type="button">
          Add to cart
        </button>
      </Details>
    </Item>
  )
};

export default BookItem;
