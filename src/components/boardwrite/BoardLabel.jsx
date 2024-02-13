import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CampusUnchecked from 'assets/board/write/SchoolUnchecked.svg';
import CampusChecked from 'assets/board/write/SchoolChecked.svg';
import BranchUnchecked from 'assets/board/write/CampUnchecked.svg';
import BranchChecked from 'assets/board/write/CampChecked.svg';
import CenterUnchecked from 'assets/board/write/UnionUnchecked.svg';
import CenterChecked from 'assets/board/write/UnionChecked.svg';
import SuggestionUnchecked from 'assets/board/write/SuggestionUnchecked.svg';
import SuggestionChecked from 'assets/board/write/SuggestionChecked.svg';

import CampusBoard from './BoardCampus';
import BranchBoard from './BoardBranch';
import CenterBoard from './BoardCenter';

const ContainerType = styled.div`
  display: flex;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const BoardLabel = ({
  selectedHost,
  setSelectedHost,
  selectedBoard,
  setSelectedBoard,
  buttonStates,
  setButtonStates,
}) => {
  // const hostChange = useCallback(
  //   (e) => {
  //     setSelectedHost(e.target.value);
  //   },
  //   [selectedHost],
  // );

  // const boardChange = useCallback(
  //   (e) => {
  //     setSelectedBoard(e.target.value);
  //   },
  //   [selectedBoard],
  // );

  const handleClick = (buttonName, host, board) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      campusButton: buttonName === 'campusButton',
      branchButton: buttonName === 'branchButton',
      centerButton: buttonName === 'centerButton',
      suggestionButton: buttonName === 'suggestionButton',
    }));
    setSelectedHost(host);
    setSelectedBoard(board);
  };

  return (
    <div>
      <ContainerType>
        <div>
          <TypeLink to="#" onClick={() => handleClick('campusButton', 'CAMPUS', 'NOTICE')}>
            {buttonStates.campusButton ? (
              <img src={CampusChecked} alt="Inactive Image" />
            ) : (
              <img src={CampusUnchecked} alt="학교" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('branchButton', 'BRANCH', 'NOTICE')}>
            {buttonStates.branchButton ? (
              <img src={BranchChecked} alt="Inactive Image" />
            ) : (
              <img src={BranchUnchecked} alt="지부" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('centerButton', 'CENTER', 'NOTICE')}>
            {buttonStates.centerButton ? (
              <img src={CenterChecked} alt="Inactive Image" />
            ) : (
              <img src={CenterUnchecked} alt="연합" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('suggestionButton', 'CENTER', 'NOTICE')}>
            {buttonStates.suggestionButton ? (
              <img src={SuggestionChecked} alt="Inactive Image" />
            ) : (
              <img src={SuggestionUnchecked} alt="연합" />
            )}
          </TypeLink>
        </div>
      </ContainerType>

      {buttonStates.campusButton && (
        <CampusBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.branchButton && (
        <BranchBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.centerButton && (
        <CenterBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.suggestionButton && (
        <CampusBoard host={selectedHost} board={selectedBoard} />
      )}
    </div>
  );
};

BoardLabel.propTypes = {
  selectedHost: PropTypes.string.isRequired,
  setSelectedHost: PropTypes.func.isRequired,
  selectedBoard: PropTypes.string.isRequired,
  setSelectedBoard: PropTypes.func.isRequired,
  buttonStates: PropTypes.object.isRequired,
  setButtonStates: PropTypes.func.isRequired,
};

export default BoardLabel;
