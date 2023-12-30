import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  
  &:hover {
    color: lightgray;
  }
`;
