/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text }) => (
  <button type={type}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  text: 'Button',
};

export default Button;
