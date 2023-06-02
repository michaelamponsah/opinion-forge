/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  label,
  handleClick,
  btnColor,
}) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <button
      className={`${btnColor} text-custom-light-50 text-white px-10 font-medium py-2 rounded`}
      type={type}
      onClick={handleBtnClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  btnColor: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  btnColor: 'bg-custom-purple',
};

export default Button;
