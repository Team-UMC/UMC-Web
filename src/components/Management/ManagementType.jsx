import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import setnoticeUnchecked from 'assets/management/setnoticeUnchecked.svg';
import calenderChecked from 'assets/management/calenderChecked.svg';
import challengerUnchecked from 'assets/management/challengerUnchecked.svg';

import SchoolChecked from '../../assets/boardwrite/schoolChecked.svg';

const ManagmentContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center; 
margin-bottom: 5vh;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const ManagementType = () => {

    const [buttonStates, setButtonStates] = useState({
        setnoticeButton: false,
        calenderButton: true,
        challengerButton: false,
      });
    
      const handleClick = (buttonName) => {
        setButtonStates((prevStates) => ({
          setnoticeButton: buttonName === 'setnoticeButton' ? !prevStates.setnoticeButton : false,
          calenderButton: buttonName === 'calenderButton' ? !prevStates.calenderButton : true,
          challengerButton: buttonName === 'challengerButton' ? !prevStates.challengerButton : false,
        }));
      };

    return (
        <ManagmentContainer>
            <TypeLink to="#" onClick={() => handleClick('setnoticeButton')}>
            {buttonStates.setnoticeButton ? (
              <img src={SchoolChecked} alt="Inactive Image" />
            ) : (
              <img src={setnoticeUnchecked} alt="공지" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('calenderButton')}>
            {buttonStates.calenderButton ? (
              <img src={calenderChecked} alt="Inactive Image" />
            ) : (
              <img src={setnoticeUnchecked} alt="캘린더" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('challengerButton')}>
            {buttonStates.challengerButton ? (
              <img src={SchoolChecked} alt="Inactive Image" />
            ) : (
              <img src={challengerUnchecked} alt="챌린저" />
            )}
          </TypeLink>
        </ManagmentContainer>
    );
};

export default ManagementType;