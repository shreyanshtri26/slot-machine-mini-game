import React from 'react';

const SpinButton = ({ onClick, disabled }) => {
  return (
    <button className={`spin-button ${disabled ? 'disabled' : ''}`} onClick={onClick} disabled={disabled}>
      {disabled ? 'Spinning...' : 'Spin (10 credits)'}
    </button>
  );
};

export default SpinButton;