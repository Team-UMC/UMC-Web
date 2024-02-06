import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import SchoolUnchecked from 'assets/board/write/SchoolUnchecked.svg';
import SchoolChecked from 'assets/board/write/SchoolChecked.svg';
import CampUnchecked from 'assets/board/write/CampUnchecked.svg';
import CampChecked from 'assets/board/write/CampChecked.svg';
import UnionUnchecked from 'assets/board/write/UnionUnchecked.svg';
import UnionChecked from 'assets/board/write/UnionChecked.svg';
import SuggestionUnchecked from 'assets/board/write/SuggestionUnchecked.svg';
import SuggestionChecked from 'assets/board/write/SuggestionChecked.svg';

import SchoolBoard from './BoardSchool';
import CampBoard from './BoardCamp';
//import UnionBoard from './BoardUnion';

const ContainerType = styled.div`
  display: flex;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const BoardLabel = () => {
  const [buttonStates, setButtonStates] = useState({
    schoolButton: true,
    campButton: false,
    unionButton: false,
    suggestionButton: false,
  });

  const [selectedHost, setSelectedHost] = useState('school');
  const [selectedBoard, setSelectedBoard] = useState('NOTICE');

  const handleClick = (buttonName, host, board) => {
    setButtonStates((prevStates) => ({
      schoolButton:
        buttonName === 'schoolButton' ? !prevStates.schoolButton : false,
      campButton: buttonName === 'campButton' ? !prevStates.campButton : false,
      unionButton:
        buttonName === 'unionButton' ? !prevStates.unionButton : false,
      suggestionButton:
        buttonName === 'suggestionButton'
          ? !prevStates.suggestionButton
          : false,
    }));

    setSelectedHost(host);
    setSelectedBoard(board);
  };

  return (
    <div>
      <ContainerType>
        <div>
          <TypeLink to="#" onClick={() => handleClick('schoolButton')}>
            {buttonStates.schoolButton ? (
              <img src={SchoolChecked} alt="Inactive Image" />
            ) : (
              <img src={SchoolUnchecked} alt="학교" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('campButton')}>
            {buttonStates.campButton ? (
              <img src={CampChecked} alt="Inactive Image" />
            ) : (
              <img src={CampUnchecked} alt="지부" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('unionButton')}>
            {buttonStates.unionButton ? (
              <img src={UnionChecked} alt="Inactive Image" />
            ) : (
              <img src={UnionUnchecked} alt="연합" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('suggestionButton')}>
            {buttonStates.suggestionButton ? (
              <img src={SuggestionChecked} alt="Inactive Image" />
            ) : (
              <img src={SuggestionUnchecked} alt="연합" />
            )}
          </TypeLink>
        </div>
      </ContainerType>
      
      {buttonStates.schoolButton && (
        <SchoolBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.campButton && (
        <CampBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.unionButton && (
        <CampBoard host={selectedHost} board={selectedBoard} />
      )}
      {buttonStates.suggestionButton && (
        <CampBoard host={selectedHost} board={selectedBoard} />
      )}
    </div>
  );
};

export default BoardLabel;
