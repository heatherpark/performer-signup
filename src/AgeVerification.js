import './AgeVerification.css';
import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from'react-redux';
import { required, alphanumeric, minLength, emailMatch, age } from './forms/validation';

class AgeVerification extends Component {
  renderField(field) {
    const { meta: { touched, error, valid } } = field;
    const validClass = touched && valid ? 'form-field--valid' : '';
    const errorClass = touched && error ? 'form-field--invalid' : '';
    const className = `form-field ${errorClass} ${validClass}`;
    
    return (
      <div className={className}>
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...field.input} />
        <div className="error-text">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="age-verification">
        <h2 className="message primary-font">
          All entered information is hidden from users. 
          This is for age verification purposes only.
        </h2>
        <form>
          <Field
            name="username"
            type="text"
            placeholder="Username"
            validate={[required, alphanumeric]}
            component={this.renderField} />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            validate={[required, minLength(8)]}
            component={this.renderField} />
          <Field
            name="dob"
            type="date" 
            placeholder="Birthday"
            validate={[required, age(21)]}
            component={this.renderField} />
          <Field
            name="email1"
            type="email"
            placeholder="Email Address"
            validate={required}
            component={this.renderField} />
          <Field
            name="email2"
            type="email"
            placeholder="Confirm Email Address"
            validate={[required, emailMatch]}
            component={this.renderField} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'ageVerificationForm'
})(AgeVerification);