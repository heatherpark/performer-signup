import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from'react-redux';
import { required, alphanumeric, minLength, emailMatch, age } from './forms/validation';

class AgeVerification extends Component {
  renderField(field) {
    const { meta: { touched, error, valid } } = field;
    const errorClass = touched && error ? 'form-field--invalid' : '';
    const validClass = touched && valid ? 'form-field--valid' : '';
    const className = `form-field ${errorClass} ${validClass}`;
    
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
          name="dob"
          type="date" 
          validate={[required, age(21)]}
          component={this.renderField} />
        <Field
          name="email1"
          type="email"
          validate={required}
          component={this.renderField} />
        <Field
          name="email2"
          type="email"
          validate={[required, emailMatch]}
          component={this.renderField} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'ageVerificationForm'
})(AgeVerification);