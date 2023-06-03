/* eslint-disable arrow-body-style */
import React from 'react';
import SuggestionsFilteringButton from './suggestions-filtering-button';
import SuggestionsFilterList from './suggestions-filter-list';

const SuggestionsFilter = () => {
  const handleOnClickFilter = () => {
  };

  return (
    <>
      <SuggestionsFilteringButton onClickFilter={handleOnClickFilter} />
      <SuggestionsFilterList />
    </>
  );
};

export default SuggestionsFilter;
