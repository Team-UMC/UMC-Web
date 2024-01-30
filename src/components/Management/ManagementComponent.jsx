import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

import BoardTitle from 'components/BoardWrite/BoardTitle';
import BoardText from 'components/BoardWrite/BoardText';
import ManagementButton from 'components/Management/Button';
import StartendDate from 'components/Management/StartendDate';
import Local from 'components/Management/SelectLocal';
import Classify from 'components/Management/Classify';


import SearchChallenger from "./SearchChallenger.jsx";
import ChallengerType from "./ChallengerType";

const TypeComponent = ({ buttonStates }) => {
  return (
    <div>
      {/* {buttonStates.setnoticeButton && <MyList />} {' '} */}

      {buttonStates.calenderButton && (
        <>
          <BoardTitle />
          <BoardText />
          <StartendDate />
          <Local />
          <Classify />
          <ManagementButton />
        </>
      )}{' '}

     {buttonStates.challengerButton && (
     <>
        <SearchChallenger />
        <ChallengerType />

     </>
     )} {' '} 
    </div>
  );
};

// Define PropTypes for TypeComponent
TypeComponent.propTypes = {
  buttonStates: PropTypes.shape({
    setnoticeButton: PropTypes.bool,
    calenderButton: PropTypes.bool,
    challengerButton: PropTypes.bool,
  }).isRequired,
};

export default TypeComponent;
