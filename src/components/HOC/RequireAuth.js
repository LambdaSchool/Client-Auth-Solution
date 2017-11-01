import React, { Component } from 'react';

export default (ComposedComponent) => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!localStorage.getItem('token')) {
        this.props.history.replace('/signin');
      }
    }
    render() {
      if (!localStorage.getItem('token')) return null;
      return <ComposedComponent />;
    }
  }

  return RequireAuthentication;
};

