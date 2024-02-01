import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

import figmaUnchecked from 'assets/todayilearn/figmaUnchecked.svg';
import figmaChecked from 'assets/todayilearn/figmaChecked.svg';
import springUnchecked from 'assets/todayilearn/springUnchecked.svg';
import springChecked from 'assets/todayilearn/springChecked.svg';
import nodeUnchecked from 'assets/todayilearn/nodeUnchecked.svg';
import nodeChecked from 'assets/todayilearn/nodeChecked.svg';
import webUnchecked from 'assets/todayilearn/webUnchecked.svg';
import webChecked from 'assets/todayilearn/webChecked.svg';
import androidUnchecked from 'assets/todayilearn/androidUnchecked.svg';
import androidChecked from 'assets/todayilearn/androidChecked.svg';
import iosUnchecked from 'assets/todayilearn/iosUnchecked.svg';
import iosChecked from 'assets/todayilearn/iosChecked.svg';
import studyUnchecked from 'assets/todayilearn/studyUnchecked.svg';
import studyChecked from 'assets/todayilearn/studyChecked.svg';

const OptionContainer = styled.div`
border-radius: 12px;
width: 100%;
padding: 1vh 1.6vh;
border-radius: 12px;
margin-top: 5vh;
margin-bottom: 1.5vh;

border: 1px solid #232A6D;
`;

const ContainerType = styled.div`
display: flex;
`;

const FontStyle = styled.div`
font-size: 18px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin-right: 1vh;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const OptionTIL = () => {
    const [buttonStates, setButtonStates] = useState({
        figmaButton: false,
        springButton: false,
        nodeButton: false,
        webButton: false,
        androidButton: false, 
        iosButton: false,
        studyButton: false,
    });

    const handleClick = (buttonName) => {
        setButtonStates((prevStates) => ({
        figmaButton: buttonName === 'figmaButton' ? !prevStates.figmaButton : false,
        springButton: buttonName === 'springButton' ? !prevStates.springButton : false,
        nodeButton: buttonName === 'nodeButton' ? !prevStates.nodeButton : false,
        webButton: buttonName === 'webButton' ? !prevStates.webButton : false,
        androidButton: buttonName === 'androidButton' ? !prevStates.androidButton : false,
        iosButton: buttonName === 'iosButton' ? !prevStates.iosButton : false,
        studyButton: buttonName === 'studyButton' ? !prevStates.studyButton : false,
        }));
      };

    return(
        <OptionContainer>
        <ContainerType>
        <FontStyle> 분류 </FontStyle>
          <TypeLink to="#" onClick={() => handleClick('figmaButton')}>
            {buttonStates.figmaButton ? (
              <img src={figmaChecked} alt="Inactive Image" />
            ) : (
              <img src={figmaUnchecked} alt="피그마" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('springButton')}>
            {buttonStates.springButton ? (
              <img src={springChecked} alt="Inactive Image" />
            ) : (
              <img src={springUnchecked} alt="스프링" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('nodeButton')}>
            {buttonStates.nodeButton ? (
              <img src={nodeChecked} alt="Inactive Image" />
            ) : (
              <img src={nodeUnchecked} alt="노드" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('webButton')}>
            {buttonStates.webButton ? (
              <img src={webChecked} alt="Inactive Image" />
            ) : (
              <img src={webUnchecked} alt="웹" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('androidButton')}>
            {buttonStates.androidButton ? (
              <img src={androidChecked} alt="Inactive Image" />
            ) : (
              <img src={androidUnchecked} alt="안드로이드" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('iosButton')}>
            {buttonStates.iosButton ? (
              <img src={iosChecked} alt="Inactive Image" />
            ) : (
              <img src={iosUnchecked} alt="ios" />
            )}
          </TypeLink>

          <TypeLink to="#" onClick={() => handleClick('studyButton')}>
            {buttonStates.studyButton ? (
              <img src={studyChecked} alt="Inactive Image" />
            ) : (
              <img src={studyUnchecked} alt="스터디" />
            )}
          </TypeLink>

      </ContainerType>

        </OptionContainer>
    );

};

export default OptionTIL;