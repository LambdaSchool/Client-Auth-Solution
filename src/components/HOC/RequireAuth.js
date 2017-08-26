import React, { Component } from 'react';

export default (ComposedComponent) => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (localStorage.getItem('token') === null) this.props.history.replace('/signin');
    }
    render() {
      if (localStorage.getItem('token') === null) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  return RequireAuthentication;
};

// -------------
// index.js
