import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, alphanumeric, minLength } from './forms/validation';

class AgeVerification extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-field ${touched && error ? 'form-field--invalid' : ''}`;

    return (
      <div className={className}>
        <input
          type={field.type}
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
          type="text"
          validate={[required, alphanumeric]}
          component={this.renderField} />
        <Field
          name="password"
          type="password"
          validate={[required, minLength(8)]}
          component={this.renderField} />
        <Field
          name="email1"
          type="email"
          validate={[required, minLength(8)]}
          component={this.renderField} />
        <Field
          name="email2"
          type="email"
          validate={[required, minLength(8)]}
          component={this.renderField} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'ageVerificationForm'
})(AgeVerification);