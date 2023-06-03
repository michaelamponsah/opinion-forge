import React from 'react';
import SuggestionsFilterListItem from './suggestions-filter-list-item';

const filteringOptions = [
  {
    key: 1,
    label: 'Most Upvotes',
  },
  {
    key: 2,
    label: 'Least Upvotes',
  },
  {
    key: 3,
    label: 'Most Comments',
  },

  {
    key: 4,
    label: 'Least Comments',
  },

];

const SuggestionsFilterList = () => (
  <ul className="absolute top-24 bg-custom-light-50 drop-shadow-md py-1 w-1/5 rounded-lg divide-y-2 divide-slate-200">
    {
      filteringOptions.map((option) => (
        <SuggestionsFilterListItem
          key={option.key}
          label={option.label}
        />
      ))
    }
  </ul>
);

export default SuggestionsFilterList;
