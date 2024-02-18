import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GithubImage = styled.img`
  width: 442px;
  height: 130px;
`;

const Github = ({ githubImage }) => {
  return (
    <div>
      <GithubImage src={githubImage} />
    </div>
  );
};

Github.propTypes = {
  githubImage: PropTypes.string.isRequired,
};

export default Github;
