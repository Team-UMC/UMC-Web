import HistoryComponent from 'components/History/HistoryComponent';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
`;

const Div = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const HistoryPage = () => {
  return (
    <Wrapper>
      <Div> 히스토리 페이지입니다.</Div>
      <Container>
        <HistoryComponent />
        <HistoryComponent />
        <HistoryComponent />
        <HistoryComponent />
      </Container>
    </Wrapper>
  );
};

export default HistoryPage;
