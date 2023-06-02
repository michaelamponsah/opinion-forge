/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  label,
  btnColor,
  handleClick,
  icon,
}) => {
  const handleBtnClick = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <button
      className={`${btnColor} text-custom-light-50 text-white px-8 py-2 font-medium rounded flex gap-2 justify-center items-center`}
      type={type}
      onClick={handleBtnClick}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  btnColor: PropTypes.string,
  icon: PropTypes.element,
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  btnColor: 'bg-custom-purple',
  icon: '',
};

export default Button;
