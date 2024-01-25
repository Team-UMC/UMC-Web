import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

import SchoolUnchecked from '../../assets/boardwrite/schoolUnchecked.svg';
import SchoolChecked from '../../assets/boardwrite/schoolChecked.svg';
import CampUnchecked from '../../assets/boardwrite/campUnchecked.svg';
import CampChecked from '../../assets/boardwrite/campChecked.svg';
import UnionUnchecked from '../../assets/boardwrite/unionUnchecked.svg';
import UnionChecked from '../../assets/boardwrite/unionChecked.svg';
import SuggestionUnchecked from '../../assets/boardwrite/suggestionUnchecked.svg';
import SuggestionChecked from '../../assets/boardwrite/suggestionChecked.svg';



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

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      schoolButton:
        buttonName === 'schoolButton' ? !prevStates.schoolButton : false,
      campButton: buttonName === 'campButton' ? !prevStates.campButton : false,
      unionButton: buttonName === 'unionButton' ? !prevStates.unionButton : false,
      suggestionButton: buttonName === 'suggestionButton' ? !prevStates.suggestionButton : false,
    }));
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
      {buttonStates.schoolButton && <SchoolBoard />}{' '}
      {/* Conditionally render SchoolBoard */}
      {buttonStates.campButton && <CampBoard />}{' '}
      {/* Conditionally render SchoolBoard */}
      {buttonStates.unionButton && <CampBoard />}{' '}
      {/* Conditionally render SchoolBoard */}
      {buttonStates.suggestionButton && <CampBoard />}{' '}
      {/* Conditionally render SchoolBoard */}


    </div>
  );
};

export default BoardLabel;
