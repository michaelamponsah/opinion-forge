import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronUp } from 'react-icons/fa';

const UpVote = ({ onClickUpvote }) => {
  const [voteCount, setVoteCount] = useState({ count: 0, isActive: false });

  const handleClick = () => {
    const updatedUpvoteCount = onClickUpvote(voteCount);
    setVoteCount((prevVoteCount) => (
      {
        ...prevVoteCount,
        count: updatedUpvoteCount.count,
        isActive: updatedUpvoteCount.isActive,
      }
    ));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group flex flex-col justify-center items-center bg-custom-light-150 ${voteCount.isActive && 'bg-custom-dark-blue-200'} ${voteCount.isActive ? 'hover:bg-custom-dark-blue-200' : 'hover:bg-custom-light-100'} active:bg-custom-dark-blue-200 rounded-lg py-1 px-3 gap-y-1 w-10`}
    >
      <span>
        <FaChevronUp className={`group-active:text-custom-light-50 ${voteCount.isActive ? 'text-custom-light-50' : 'text-custom-dark-blue-200'}`} />
      </span>
      <span className={`group-active:text-custom-light-50 font-semibold ${voteCount.isActive ? 'text-custom-light-50' : 'text-custom-dark-blue-100'}`}>{voteCount.count}</span>
    </button>
  );
};

UpVote.propTypes = {
  onClickUpvote: PropTypes.func.isRequired,
};

export default UpVote;
