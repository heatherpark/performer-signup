import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class AgeVerification extends Component {
  render() {
    return (
      <form></form>
    );
  }
}

export default reduxForm({
  form: 'AgeVerificationForm'
})(AgeVerification);