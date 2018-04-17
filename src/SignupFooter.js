import React from 'react';

const SignupFooter = (props) => {
  return (
    <div>
      <button>back</button>
      <button disabled={!props.canMoveForward}>forward</button>
    </div>
  );
};

export default SignupFooter;