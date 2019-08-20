import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import CartTable from '../../organisms/CartTable';

const CartPage = () => {
  return (
    <>
      <MainTemplate>
        <CartTable />
      </MainTemplate>
    </>
  );
};

export default CartPage;
