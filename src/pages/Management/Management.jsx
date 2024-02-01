import React, { useState } from 'react';
import styled from 'styled-components';

import TypeComponent from 'components/Management/ManagementComponent';
import ManagementTitle from 'components/Management/Title';
import ManagementType from 'components/Management/ManagementType';

const ManagmentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5vh 50vh;
`;

const Management = () => {
  const [buttonStates, setButtonStates] = useState({
    setnoticeButton: false,
    calenderButton: true,
    challengerButton: false,
  });

  const handleClick = (buttonName) => {
    setButtonStates((prevStates) => ({
      setnoticeButton:
        buttonName === 'setnoticeButton' ? !prevStates.setnoticeButton : false,
      calenderButton:
        buttonName === 'calenderButton' ? !prevStates.calenderButton : false,
      challengerButton:
        buttonName === 'challengerButton'
          ? !prevStates.challengerButton
          : false,
    }));
  };

  return (
    <ManagmentContainer>
      <ManagementTitle />

      <ManagementType buttonStates={buttonStates} handleClick={handleClick} />

      <TypeComponent buttonStates={buttonStates} />
    </ManagmentContainer>
  );
};

export default Management;
