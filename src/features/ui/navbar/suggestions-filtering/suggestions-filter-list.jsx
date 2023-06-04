import React, { useState } from 'react';
import SuggestionsFilterListItem from './suggestions-filter-list-item';

const filteringOptions = [
  {
    key: 0,
    label: 'Most Upvotes',
  },
  {
    key: 1,
    label: 'Least Upvotes',
  },
  {
    key: 2,
    label: 'Most Comments',
  },

  {
    key: 3,
    label: 'Least Comments',
  },

];

const SuggestionsFilterList = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleOptionChange = (itemValue) => {
    console.log('Selected: ', itemValue);
  };

  const handleOptionFocus = (index) => {
    setSelectedItem(index);
  };

  return (
    <ul className="absolute top-24 bg-custom-light-50 drop-shadow-md py-1 w-1/5 rounded-lg divide-y-2 divide-slate-200">
      {
    filteringOptions.map((option, index) => (
      <SuggestionsFilterListItem
        key={option.key}
        label={option.label}
        selected={selectedItem === index}
        onOptionChange={(itemValue) => handleOptionChange(itemValue)}
        onOptionFocus={() => handleOptionFocus(index)}
      />
    ))
  }
    </ul>
  );
};

export default SuggestionsFilterList;
