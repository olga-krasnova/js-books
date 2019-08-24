import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 5px;
  margin-top: 5px;
  outline none;
  border: 0;
  background: transparent;
  
  &:hover {
    i {
      color: #000;
    }
  }
  
  i {
    transition: all 0.5s ease;
    color: #757373;
  }
`;

const CartItem = props => {
  const { item, index, onIncrease, onDecrease, onDelete } = props;
  const { id, title, count, total } = item;

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <Button type="button" className="delete" onClick={() => onDelete(id)}>
          <i className="material-icons">delete_outline</i>
        </Button>
        <Button type="button" className="increase" onClick={() => onIncrease(id)}>
          <i className="material-icons">add_circle_outline</i>
        </Button>
        <Button type="button" className="decrease" onClick={() => onDecrease(id)}>
          <i className="material-icons">remove_circle_outline</i>
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
