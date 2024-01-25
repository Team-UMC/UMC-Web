import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrevButtonImage from 'assets/signup/PrevButton.svg';

const Button = styled.img`
  display: flex;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const SubmitButton = ({ handleSubmit }) => {
  const handleClick = async () => {
    await handleSubmit();
  };

  return <Button src={PrevButtonImage} alt="다음" onClick={handleClick} />;
};

SubmitButton.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default SubmitButton;
