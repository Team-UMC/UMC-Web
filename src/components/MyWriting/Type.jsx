import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const StyledTypeList = styled.div`
  color: ${(props) => (props.isActive ? '#000C76' : '#999')};
  font-size: 18px;
  padding: 1vh;
  cursor: pointer;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    color: #000c76;
  }
`;

const Underline = styled.div`
  position: absolute;
  bottom: -10px;
  height: 3px;
  width: 180%;
  background-color: #000c76;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  left: 50%; /* 가운데 정렬을 위해 추가 */
  transform: translateX(-50%); /* 가운데 정렬을 위해 추가 */
`;

const Type = ({ activeType, handleTypeClick }) => {
  const handleItemClick = (type) => {
    handleTypeClick(type);
  };

  return (
    <TypeContainer>
      <StyledTypeList
        onClick={() => handleItemClick('작성글')}
        isActive={activeType.writingButton}
      >
        작성글
        <Underline isActive={activeType.writingButton} />
      </StyledTypeList>

      <StyledTypeList
        onClick={() => handleItemClick('작성댓글')}
        isActive={activeType.commentButton}
      >
        작성 댓글
        <Underline isActive={activeType.commentButton} />
      </StyledTypeList>

      <StyledTypeList
        onClick={() => handleItemClick('좋아요한글')}
        isActive={activeType.goodButton}
      >
        좋아요 한 글
        <Underline isActive={activeType.goodButton} />
      </StyledTypeList>
    </TypeContainer>
  );
};

Type.propTypes = {
  activeType: PropTypes.object.isRequired,
  handleTypeClick: PropTypes.func.isRequired,
};

export default Type;
