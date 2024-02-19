import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import setnoticeUnchecked from 'assets/management/setnoticeUnchecked.svg';
import setnoticeChecked from 'assets/management/setnoticeChecked.svg';
import calenderUnchecked from 'assets/management/calenderUnchecked.svg';
import calenderChecked from 'assets/management/calenderChecked.svg';
import challengerUnchecked from 'assets/management/challengerUnchecked.svg';
import challengerChecked from 'assets/management/challengerChecked.svg';

const ManagmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;
`;

const ManagementLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
  text-decoration: none;

  padding: 0 15px;
`;

const ManagementType = ({ buttonStates, handleClick }) => {
  return (
    <ManagmentContainer>
      <ManagementLink to="/management/notice" onClick={() => handleClick('setnoticeButton')}>
        {buttonStates.setnoticeButton ? (
          <img src={setnoticeChecked} alt="활성 이미지" />
        ) : (
          <img src={setnoticeUnchecked} alt="비활성 이미지" />
        )}
      </ManagementLink>

      <ManagementLink to="/management/calendar" onClick={() => handleClick('calenderButton')}>
        {buttonStates.calenderButton ? (
          <img src={calenderChecked} alt="활성 이미지" />
        ) : (
          <img src={calenderUnchecked} alt="비활성 이미지" />
        )}
      </ManagementLink>

      <ManagementLink to="/management/challenger" onClick={() => handleClick('challengerButton')}>
        {buttonStates.challengerButton ? (
          <img src={challengerChecked} alt="활성 이미지" />
        ) : (
          <img src={challengerUnchecked} alt="비활성 이미지" />
        )}
      </ManagementLink>
    </ManagmentContainer>
  );
};

ManagementType.propTypes = {
  buttonStates: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ManagementType;
