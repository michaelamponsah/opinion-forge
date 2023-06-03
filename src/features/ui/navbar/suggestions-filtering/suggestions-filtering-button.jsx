import React from 'react';
import { PropTypes } from 'prop-types';
import { FaChevronDown } from 'react-icons/fa';

const SuggestionsFilteringButton = ({ onClickFilter }) => {
  const handleClick = () => {
    onClickFilter();
  };

  return (
    <button
      type="button"
      className="bg-custom-dark-blue-100 text-custom-light-150 flex items-center gap-2"
      onClick={handleClick}
    >
      <div>
        <span className="font-light">Sort by : </span>
        <span className="font-medium">Most Upvotes</span>
      </div>
      <FaChevronDown />
    </button>
  );
};

SuggestionsFilteringButton.propTypes = {
  onClickFilter: PropTypes.func.isRequired,
};

export default SuggestionsFilteringButton;
