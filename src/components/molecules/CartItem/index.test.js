import React from 'react';
import { mount } from 'enzyme';
import CartItem from './index';

describe('CartItem', () => {
  let CartItemContainer; let props;

  beforeEach(() => {
    props = {
      item: {
        id: '9780321812186',
        title: 'Effective JavaScript',
        count: 1,
        total: 21.99,
      },
      index: 0,
      onDelete: jest.fn(),
      onIncrease: jest.fn(),
      onDecrease: jest.fn()
    };

    CartItemContainer = mount(<CartItem {...props} />);
  });

  it('should onDelete when click delete button', () => {
    // Arrange
    // Act
    CartItemContainer.find('.delete').at(0).simulate('click');

    // Assert
    expect(props.onDelete).toHaveBeenCalled();
  });

  it('should onIncrease when click increase button', () => {
    // Arrange
    // Act
    CartItemContainer.find('.increase').at(1).simulate('click');

    // Assert
    expect(props.onIncrease).toHaveBeenCalled();
  });

  it('should onDecrease when click decrease button', () => {
    // Arrange
    // Act
    CartItemContainer.find('.decrease').at(2).simulate('click');

    // Assert
    expect(props.onDecrease).toHaveBeenCalled();
  });
});
