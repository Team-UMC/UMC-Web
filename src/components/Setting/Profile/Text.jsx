import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`

`;

const UpperWrapper = styled.div`
  display: flex;

  // 양쪽 정렬을 하기 위해서 "이름/닉네임/상태메세지" 왼쪽 끝으로 고정
  justify-content: flex-start;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const CharacterLimit = styled.div`
  // 양쪽 정렬을 하기 위해서 "OO자 이내" 오른쪽 끝으로 고정
  margin-left: auto;

  // textarea에 붙이기 위해서 아래쪽 끝으로 고정
  margin-top: auto;

  // 글씨 색 및 사이즈 조절
  color: gray;
  font-size: 12px;
`;

const Textarea = styled.textarea`
  width: 100%;

  // textarea의 크기 조절 제한
  resize: none;

  // 박스 테두리 스타일링
  border: 1px solid #4e4e4e;
  border-radius: 10px;

  padding: 7px 0 0 10px;

  // 상태메세지 textarea 크기 조절
  height: ${(props) => props.customheight || '30px'};
`;

const Text = ({ label, description, placeholder, customheight, defaultValue, onChange }) => {
  return (
    <Container>
      <UpperWrapper>
        <Title> {label} </Title>
        <CharacterLimit> {description} </CharacterLimit>
      </UpperWrapper>
      
      <Textarea
        type="text"
        placeholder={placeholder}
        customheight={customheight}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Container>
  );
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  customheight: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Text;
