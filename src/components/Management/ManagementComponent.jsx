import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

<<<<<<< HEAD
import BoardTitle from 'components/BoardWrite/BoardTitle';
import BoardText from 'components/BoardWrite/BoardText';
=======
import AdminPage from 'layout/NoticePin/AdminPage';
import BoardTitle from '../BoardWrite/BoardTitle';
import BoardText from '../BoardWrite/BoardText';
>>>>>>> 219b6b241a15c8e5feb3626f4dfb5dd766288423
import ManagementButton from 'components/Management/Button';
import StartendDate from 'components/Management/StartendDate';
import Local from 'components/Management/SelectLocal';
import Classify from 'components/Management/Classify';

<<<<<<< HEAD
import AdminPage from 'layout/Admin/AdminPage.jsx';
import SearchChallenger from "./SearchChallenger.jsx";
import ChallengerType from "./ChallengerType";
import ChallengerPosition from "./ChallengerPosition";
import styled from "styled-components";
=======
import SearchChallenger from './SearchChallenger.jsx';
import ChallengerType from './ChallengerType';
import ChallengerPosition from './ChallengerPosition';
import styled from 'styled-components';
>>>>>>> 219b6b241a15c8e5feb3626f4dfb5dd766288423

const ButtonContainer = styled.div`
  display: flex;
  width: 120vh;
  justify-content: flex-end;
  align-items: center;
  margin-left: 16px;
`;

const ButtonContainerChallenger = styled.div`
  display: flex;
  width: 120vh;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

const TypeComponent = ({ buttonStates }) => {
  return (
    <div>
      {buttonStates.setnoticeButton && (
        <>
          <AdminPage />
        </>
      )}{' '}
      {buttonStates.calenderButton && (
        <>
          <BoardTitle />
          <BoardText />
          <StartendDate />
          <Local />
          <Classify />
          <ButtonContainer>
            <ManagementButton />
          </ButtonContainer>
        </>
      )}{' '}
      {buttonStates.challengerButton && (
        <>
          <SearchChallenger />
          <ChallengerPosition />
          <ChallengerType />
          <ButtonContainerChallenger>
            <ManagementButton />
          </ButtonContainerChallenger>
        </>
      )}{' '}
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
