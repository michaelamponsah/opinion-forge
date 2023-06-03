/* eslint-disable arrow-body-style */
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SuggestionsFilter = () => {
  return (
    <>
      <button
        type="button"
        className="bg-custom-dark-blue-100 text-custom-light-150 flex items-center gap-2"
      >
        <div>
          <span className="font-light">Sort by : </span>
          <span className="font-medium">Most Upvotes</span>
        </div>
        <FaChevronDown />
      </button>
    </>
  );
};

export default SuggestionsFilter;
