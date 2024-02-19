import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GithubImage = styled.img`
  width: 100%;
  height: 130px;
`;

const Github = ({ githubID }) => {
  const URL = `https://ghchart.rshah.org/2965FF/${githubID}`;

  return (
    <div>
      <GithubImage src={URL} alt={`${githubID}'s GitHub contribution chart`} />
    </div>
  );
};

Github.propTypes = {
  githubID: PropTypes.string.isRequired,
};

export default Github;
