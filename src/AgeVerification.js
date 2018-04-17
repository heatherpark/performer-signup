import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, alphanumeric } from './forms/validation';

class AgeVerification extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = touched && error ? 'invalid-field' : '';

    return (
      <div className={className}>
        <input
          type="text"
          {...field.input} />
        <div className="error-text">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="username"
          validate={[required, alphanumeric]}
          component={this.renderField} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'AgeVerificationForm'
})(AgeVerification);