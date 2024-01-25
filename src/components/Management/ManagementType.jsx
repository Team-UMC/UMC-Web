import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Add this import

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

const TypeLink = styled(Link)`
  margin-right: 10px;
  cursor: pointer;
`;

const ManagementType = ({ buttonStates, handleClick }) => {

  const handleItemClick = (type) => {
    handleClick(type);
  };

  return (
    <ManagmentContainer>
      <TypeLink to="#" onClick={() => handleItemClick('setnoticeButton')}>
        {buttonStates.setnoticeButton ? (
          <img src={setnoticeChecked} alt="Inactive Image" />
        ) : (
          <img src={setnoticeUnchecked} alt="공지" />
        )}
      </TypeLink>

      <TypeLink to="#" onClick={() => handleItemClick('calenderButton')}>
        {buttonStates.calenderButton ? (
          <img src={calenderChecked} alt="Inactive Image" />
        ) : (
          <img src={calenderUnchecked} alt="캘린더" />
        )}
      </TypeLink>

      <TypeLink to="#" onClick={() => handleItemClick('challengerButton')}>
        {buttonStates.challengerButton ? (
          <img src={challengerChecked} alt="Inactive Image" />
        ) : (
          <img src={challengerUnchecked} alt="챌린저" />
        )}
      </TypeLink>
    </ManagmentContainer>
  );
};

ManagementType.propTypes = {
  buttonStates: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ManagementType;
