import React from 'react';
import { reduxForm } from 'redux-form';
import AgeVerification from './AgeVerification';

const Main = (props) => {
  return (
    <AgeVerification />
  );
};

export default reduxForm({
  form: 'ageVerificationForm'
})(Main);