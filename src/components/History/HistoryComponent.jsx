import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 15px;
  background-color: black;

  color: white;
`;

const HistoryComponent = () => {
  return (
    <Container>
      <div>
        <div> 기수 버튼 </div>
        <div> 프로젝트 프론트 종류 </div>
      </div>

      <div>
        <div> 제목 </div>
        <div> 해시태그 </div>
      </div>

      <div> 아이콘 </div>
      <div> 더보기 버튼 </div>
    </Container>
  );
};

export default HistoryComponent;
