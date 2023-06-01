/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type, text, handleClick, btnColor,
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
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  btnColor: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: 'Button',
  btnColor: 'bg-custom-purple',
};

export default Button;
