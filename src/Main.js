import React from 'react';
import { reduxForm } from 'redux-form';
import AgeVerification from './AgeVerification';
import SignupFooter from './SignupFooter';

const Main = (props) => {
  return (
    <div>
      <AgeVerification />
      <SignupFooter canMoveForward={props.valid} />
    </div>
  );
};

export default reduxForm({
  form: 'ageVerificationForm'
})(Main);