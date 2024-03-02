import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FigmaCheckedImage from 'assets/todayilearn/figmaChecked.svg';
import FigmaUnCheckedImage from 'assets/todayilearn/figmaUnchecked.svg';

import SpringCheckedImage from 'assets/todayilearn/springChecked.svg';
import SpringUnCheckedImage from 'assets/todayilearn/springUnchecked.svg';

import NodeCheckedImage from 'assets/todayilearn/nodeChecked.svg';
import NodeUnCheckedImage from 'assets/todayilearn/nodeUnchecked.svg';

import WebCheckedImage from 'assets/todayilearn/webChecked.svg';
import WebUnCheckedImage from 'assets/todayilearn/webUnchecked.svg';

import iOSCheckedImage from 'assets/todayilearn/iosChecked.svg';
import iOSUnCheckedImage from 'assets/todayilearn/iosUnchecked.svg';

import AndroidCheckedImage from 'assets/todayilearn/androidChecked.svg';
import AndroidUnCheckedImage from 'assets/todayilearn/androidUnchecked.svg';

import ETCCheckedImage from 'assets/todayilearn/studyChecked.svg';
import ETCUnCheckedImage from 'assets/todayilearn/studyUnchecked.svg';

const OptionContainer = styled.div`
  border-radius: 12px;
  width: 100%;
  padding: 1vh 1.6vh;
  border-radius: 12px;
  margin: 1.5vh 0vh;

  border: 1px solid #232a6d;
`;

const ContainerType = styled.div`
  display: flex;
`;

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const FontStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1vh;
`;

const OptionTIL = ({ part, setPart }) => {
  const [buttonStates, setButtonStates] = useState({
    figma: false,
    spring: false,
    node: false,
    web: false,
    android: false,
    ios: false,
    etc: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      figma: buttonName === 'figma' ? !prevStates.figma : false,
      spring: buttonName === 'spring' ? !prevStates.spring : false,
      node: buttonName === 'node' ? !prevStates.node : false,
      web: buttonName === 'web' ? !prevStates.web : false,
      android: buttonName === 'android' ? !prevStates.android : false,
      ios: buttonName === 'ios' ? !prevStates.ios : false,
      etc: buttonName === 'etc' ? !prevStates.etc : false,
    }));

    switch (buttonName) {
      case 'figma':
        setPart('PM');
        break;
      case 'spring':
        setPart('SPRING');
        break;
      case 'node':
        setPart('NODE');
        break;
      case 'web':
        setPart('WEB');
        break;
      case 'android':
        setPart('ANDROID');
        break;
      case 'ios':
        setPart('IOS');
        break;
      case 'etc':
        setPart('ETC');
        break;
      default:
        setPart('');
        break;
    }
    console.log(part);
  };

  return (
    <OptionContainer>
      <ContainerType>
        <FontStyle> 분류 </FontStyle>

        <TypeLink to="#" onClick={() => handleClick('figma')}>
          {buttonStates.figma ? (
            <img src={FigmaCheckedImage} alt="Checked Image" />
          ) : (
            <img src={FigmaUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('spring')}>
          {buttonStates.spring ? (
            <img src={SpringCheckedImage} alt="Checked Image" />
          ) : (
            <img src={SpringUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('node')}>
          {buttonStates.node ? (
            <img src={NodeCheckedImage} alt="Checked Image" />
          ) : (
            <img src={NodeUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('web')}>
          {buttonStates.web ? (
            <img src={WebCheckedImage} alt="Checked Image" />
          ) : (
            <img src={WebUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('ios')}>
          {buttonStates.ios ? (
            <img src={iOSCheckedImage} alt="Checked Image" />
          ) : (
            <img src={iOSUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('android')}>
          {buttonStates.android ? (
            <img src={AndroidCheckedImage} alt="Checked Image" />
          ) : (
            <img src={AndroidUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>

        <TypeLink to="#" onClick={() => handleClick('etc')}>
          {buttonStates.etc ? (
            <img src={ETCCheckedImage} alt="Checked Image" />
          ) : (
            <img src={ETCUnCheckedImage} alt="Unchecked Image" />
          )}
        </TypeLink>
      </ContainerType>
    </OptionContainer>
  );
};

OptionTIL.propTypes = {
  part: PropTypes.string,
  setPart: PropTypes.func.isRequired,
};

export default OptionTIL;
