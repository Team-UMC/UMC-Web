import React, { useState } from 'react';
import styled from 'styled-components';

import TypeComponent from 'components/Management/ManagementComponent';
import ManagementType from 'components/Management/ManagementType';
import AdminTitle from 'components/Management/NoticePin/AdminTitle';


const AdminManagementWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 100px;
  /* padding-bottom: 100px; */
`;

const ManagmentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5vh 50vh;
`;

const TitleLayout = styled(AdminTitle)`
  display: flex;
  padding-bottom: 80px;
`;


const Management = () => {
  const [buttonStates, setButtonStates] = useState({
    setnoticeButton: true,
    calenderButton: false,
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
      <AdminManagementWrapper>
      <TitleLayout />
      </AdminManagementWrapper>

      <ManagementType buttonStates={buttonStates} handleClick={handleClick} />

      <TypeComponent buttonStates={buttonStates} />
    </ManagmentContainer>
  );
};

export default Management;
