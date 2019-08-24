import React from 'react';
import { mount } from 'enzyme';
import BookItem from './index';

describe('BookItem', () => {
  let BookItemContainer; let props;

  beforeEach(() => {
    props = {
      book: {
        title: 'Effective JavaScript',
        subtitle: '68 Specific Ways to Harness the Power of JavaScript',
        isbn13: '9780321812186',
        price: '$21.99',
        image: 'https://itbook.store/img/books/9780321812186.png',
        url: 'https://itbook.store/books/9780321812186',
      },
      onAddedToCart: jest.fn()
    };

    BookItemContainer = mount(<BookItem {...props} />);
  });

  it('should call onAddedToCart when click button', () => {
    // Arrange

    // Act
    BookItemContainer.find('button').simulate('click');

    // Assert
    expect(props.onAddedToCart).toHaveBeenCalled();
  });
});
