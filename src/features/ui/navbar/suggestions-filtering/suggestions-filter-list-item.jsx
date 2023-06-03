import React from 'react';
import { PropTypes } from 'prop-types';

const SuggestionsFilterListItem = ({ label }) => (
  <li className="py-2 px-5">{label}</li>
);

SuggestionsFilterListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestionsFilterListItem;
