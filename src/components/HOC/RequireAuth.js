import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkIfAuthenticated } from '../../actions';

export default (ComposedComponent) => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      if (!this.props.checkIfAuthenticated()) this.props.history.replace('/signin');
    }
    render() {
      if (!this.props.checkIfAuthenticated()) return null;
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  connect(mapStateToProps, { checkIfAuthenticated })(RequireAuthentication);

  return RequireAuthentication;
};

// -------------
// index.js
