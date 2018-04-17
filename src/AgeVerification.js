import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, alphanumeric } from './forms/validation';

class AgeVerification extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-field ${touched && error ? 'form-field--invalid' : ''}`;

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