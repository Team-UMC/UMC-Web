import React from 'react';
import PropTypes from 'prop-types';

import BoardTitle from 'components/BoardWrite/BoardTitle.jsx';
import BoardText from 'components/BoardWrite/BoardText.jsx';

import ManagementButton from 'components/Management/Button';
import StartendDate from 'components/Management/StartendDate';
import Local from 'components/Management/SelectLocal';
import Classify from 'components/Management/Classify';

import SearchChallenger from './SearchChallenger.jsx';
import ChallengerType from './ChallengerType';
import ChallengerPosition from './ChallengerPosition';
import styled from 'styled-components';

import NewAdminTable from 'components/Management/NoticePin/NewAdminTable';

const Container = styled.div`
  width: 100%;
`;

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

const TableLayout = styled(NewAdminTable)`
  display: flex;
  padding-bottom: 80px;
`;

const TypeComponent = ({ buttonStates }) => {
  return (
    <Container>
      {buttonStates.setnoticeButton && (
        <>
          <TableLayout />
        </>
      )}

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
      )}
      {buttonStates.challengerButton && (
        <>
          <SearchChallenger />
          <ChallengerPosition />
          <ChallengerType />
          <ButtonContainerChallenger>
            <ManagementButton />
          </ButtonContainerChallenger>
        </>
      )}
    </Container>
  );
};

TypeComponent.propTypes = {
  buttonStates: PropTypes.shape({
    setnoticeButton: PropTypes.bool,
    calenderButton: PropTypes.bool,
    challengerButton: PropTypes.bool,
  }).isRequired,
};

export default TypeComponent;
