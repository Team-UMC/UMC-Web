import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const FontStyle = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1vh;
`;

const OptionTIL = ({ setPart }) => {
  const [buttonStates, setButtonStates] = useState({
    figma: false,
    spring: false,
    node: false,
    web: false,
    android: false,
    ios: false,
    study: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      figma: buttonName === 'figma' ? !prevStates.figma : false,
      spring: buttonName === 'spring' ? !prevStates.spring : false,
      node: buttonName === 'node' ? !prevStates.node : false,
      web: buttonName === 'web' ? !prevStates.web : false,
      android: buttonName === 'android' ? !prevStates.android : false,
      ios: buttonName === 'ios' ? !prevStates.ios : false,
      study: buttonName === 'study' ? !prevStates.study : false,
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
      case 'study':
        setPart('STUDY');
        break;
      default:
        setPart('');
        break;
    }
  };

  return (
    <OptionContainer>
      <ContainerType>
        <FontStyle> 분류 </FontStyle>
        {Object.keys(buttonStates).map((buttonName) => (
          <div key={buttonName} onClick={() => handleClick(buttonName)}>
            {buttonStates[buttonName] ? (
              <img
                src={
                  require(`assets/todayilearn/${buttonName}Checked.svg`).default
                }
                alt="Checked Image"
              />
            ) : (
              <img
                src={
                  require(`assets/todayilearn/${buttonName}Unchecked.svg`)
                    .default
                }
                alt="Unchecked Image"
              />
            )}
          </div>
        ))}
      </ContainerType>
    </OptionContainer>
  );
};

OptionTIL.propTypes = {
  setPart: PropTypes.func.isRequired,
};

export default OptionTIL;
