import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './index';

describe('ErrorBoundary', () => {
  describe('No errors in a child component', () => {
    let ErrorBoundaryComponent;

    beforeAll(() => {
      ErrorBoundaryComponent = shallow(<ErrorBoundary><h1>Hello</h1></ErrorBoundary>);
    });

    it('should render the child component', () => {
      expect(ErrorBoundaryComponent.find('h1').exists()).toBeTruthy();
    })
  });

  describe('Error is caught in a child component', () => {
    let ErrorBoundaryComponent;

    beforeAll(() => {
      ErrorBoundaryComponent = shallow(<ErrorBoundary><h1>Hello</h1></ErrorBoundary>);
      ErrorBoundaryComponent.instance().componentDidCatch('error');
      ErrorBoundaryComponent.update();
    });

    it('should update the state to indicate an error', () => {
      expect(ErrorBoundaryComponent.instance().state.hasError).toBeTruthy();
    });

    it('should not render the child component', () => {
      expect(ErrorBoundaryComponent.find('h1').exists()).toBeFalsy();
    });
  });
});
