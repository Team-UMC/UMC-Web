import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
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
