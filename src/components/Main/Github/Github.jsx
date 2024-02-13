import React from 'react';
import styled from 'styled-components';

const GithubImage = styled.img`
  width: 442px;
  height: 130px;
`;

const Github = () => {
  const URL = 'https://ghchart.rshah.org/003BD3/kyxxgsoo';

  return (
    <div>
      <GithubImage src={URL} />
    </div>
  );
};

export default Github;
