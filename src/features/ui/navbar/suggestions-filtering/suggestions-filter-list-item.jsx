import React from 'react';
import { PropTypes } from 'prop-types';

const SuggestionsFilterListItem = ({ label }) => (
  <li data-value={label} className="py-2 px-5 text-slate-500 font-medium hover:cursor-pointer hover:text-custom-purple">{label}</li>
);

SuggestionsFilterListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestionsFilterListItem;
