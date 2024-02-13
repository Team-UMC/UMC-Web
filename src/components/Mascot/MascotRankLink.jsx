import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  margin: 10vh auto;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: ${({ isSelected }) => isSelected ? 'white' : 'grey'};
`;

const MascotRankLink = () => {
  const location = useLocation();
  const isRankingPage = location.pathname === '/ranking';

  return (
    <LinkWrapper>
      <StyledLink to="/mascot" isSelected={!isRankingPage}> 마스코트 </StyledLink>
      <StyledLink to="/ranking" isSelected={isRankingPage}> 랭크 </StyledLink>
    </LinkWrapper>
  );
};

export default MascotRankLink;
