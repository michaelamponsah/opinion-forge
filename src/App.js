// import { Button } from 'features/ui';
// import { FaArrowLeft } from 'react-icons/fa';
import { UpVote } from 'features/ui';

const App = () => {
  const handleClickUpvote = (upvoteCount) => {
    const { count, isActive } = upvoteCount;

    const updatedUpvoteCount = {
      count: isActive ? count - 1 : count + 1,
      isActive: !isActive,
    };

    return updatedUpvoteCount;
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Opinion Forge</h1>
      <UpVote onClickUpvote={(upvoteCount) => handleClickUpvote(upvoteCount)} />
    </div>
  );
};
export default App;
