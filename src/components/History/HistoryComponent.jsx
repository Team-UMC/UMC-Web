import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const backgroundColors = {
  1: '#B2B7C3',
  2: '#8993B3',
  3: '#6E758B',
  4: '#5A6175',
  5: '#3E4251',
  6: '#2B2E38',
  default: 'black',
};

const getBackgroundColor = (generation) => {
  return backgroundColors[generation] || backgroundColors.default;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  background-color: ${({ generation }) => getBackgroundColor(generation)};
  color: white;
`;

const UpperWrapper = styled.div`
  display: flex;
`;

const GenerationCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HashTag = styled.div`
  font-size: 10px;
`;

const IconImage = styled.div`
  display: flex;
  justify-content: center;
`;

const HoverButton = styled.div`
  margin-left: auto;
`;

const HistoryComponent = ({ generation }) => {
  return (
    <Container>
      <UpperWrapper>
        <GenerationCircle>{generation}</GenerationCircle>
        <div> 프로젝트 프론트 종류 </div>
      </UpperWrapper>

      <div>
        <div> 제목 </div>
        <HashTag> 해시태그 </HashTag>
      </div>

      <IconImage> 아이콘 </IconImage>
      <HoverButton> 더보기 버튼 </HoverButton>
    </Container>
  );
};

HistoryComponent.propTypes = {
  generation: PropTypes.string.isRequired,
};

export default HistoryComponent;
