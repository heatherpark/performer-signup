import React from 'react';
import { reduxForm } from 'redux-form';
import { AgeVerification } from '../components';
import { SignupFooter } from '../components';

const Main = (props) => {
  return (
    <div>
      <AgeVerification />
      <SignupFooter stageComplete={props.valid} />
    </div>
  );
};

export default reduxForm({
  form: 'ageVerificationForm'
})(Main);