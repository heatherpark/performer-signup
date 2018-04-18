import React from 'react';
import './SignupFooter.css';

const SignupFooter = (props) => {
  return (
    <div className="signup-footer">
      <a href=""
        className="backward">
        <i className="fas fa-angle-double-left"></i>
      </a>
      <a href="" 
        className="forward"
        disabled={props.canMoveForward}>
        <i className="fas fa-angle-double-right"></i>
      </a>
    </div>
  );
};

export default SignupFooter;