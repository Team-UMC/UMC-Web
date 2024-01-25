import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-top: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 120vh;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 8px;
  margin-right: 8px; /* Add margin-right for spacing between input and button */
  border: 1px solid #232A6D;
  border-radius: 12px;
`;

const SearchButton = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8784FF;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #232A6D;
  cursor: pointer; /* Add cursor style for better user interaction */
`;

const SearchChallenger = () => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="정보를 변경할 챌랜저의 '닉네임/이름'을 입력해주세요(EX. 리버/이경수)"
      />
      <SearchButton>검색</SearchButton>
    </SearchContainer>
  );
};

export default SearchChallenger;
