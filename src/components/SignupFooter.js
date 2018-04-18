import React from 'react';
import './SignupFooter.css';

const SignupFooter = (props) => {
  return (
    <div className="signup-footer">
      <button className="backward">
        <i className="fas fa-angle-double-left"></i>
      </button>
      <button
        className="forward"
        disabled={!props.stageComplete}>
        <i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
};

export default SignupFooter;