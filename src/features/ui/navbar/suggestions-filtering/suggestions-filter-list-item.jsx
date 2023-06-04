import React from 'react';
import { PropTypes } from 'prop-types';
import { FaCheck } from 'react-icons/fa';

const SuggestionsFilterListItem = ({
  label,
  selected,
  onOptionChange,
  onOptionFocus,
}) => {
  const handleChange = (e) => {
    const itemValue = e.target.value;
    onOptionChange(itemValue);
  };

  const handleFocus = () => {
    onOptionFocus();
  };

  return (
    <li
      className="text-slate-500 font-medium hover:text-custom-purple flex"
    >
      <input
        id={label}
        type="radio"
        name="suggestion-type"
        value={label}
        className="h-0 w-0"
        checked={selected}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <label
        htmlFor={label}
        className="w-full inline-block py-2 px-5 hover:cursor-pointer"
      >
        {label}
        <span>
          {selected && <FaCheck />}
        </span>
      </label>
    </li>
  );
};

SuggestionsFilterListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  onOptionFocus: PropTypes.func.isRequired,
};

export default SuggestionsFilterListItem;
