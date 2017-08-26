// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class SignUp extends Component {
  render() {
    return (
      <div>Sign Up</div>
    );
  }
}

SignUp = connect(null)(SignUp);

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'confirmPassword'],
})(SignUp);
