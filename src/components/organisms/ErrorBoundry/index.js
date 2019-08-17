import React, {Component} from 'react';
import ErrorIndicator from '../../atoms/ErrorIndicator';

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    const { hasError, children } = this.state;
    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      children
    );
  };
}

export default ErrorBoundry;
