/* eslint-disable arrow-body-style */
import React from 'react';
import suggestionsIcon from '../../../assets/icons/icon-suggestions.svg';
import SuggestionsFilter from './suggestions-filtering';

const Navbar = () => {
  return (
    <nav className="bg-custom-dark-blue-100 mx-auto px-4 py-5 rounded-lg">
      <div className="container flex items-center">
        <div className="flex items-center gap-10">
          <div className="flex gap-4 font-medium text-lg text-custom-light-50">
            <span>
              <img src={suggestionsIcon} alt="a light bulb suggesing an idea" />
            </span>
            <span>
              6 Suggestions
            </span>
          </div>
          <div>
            <SuggestionsFilter />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
