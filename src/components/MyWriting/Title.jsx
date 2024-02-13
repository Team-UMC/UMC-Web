import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 갤러리 메인 타이틀 컴포넌트 전체 컨테이너 스타일링
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15vh
`;

// 갤러리 메인 타이틀 폰트 스타일링
const GalleryTitle = styled.div`
  font-weight: bold;
  font-size: 34px;
  color: #00095c;
`;

// 갤러리 메인 타이틀 서브 폰트 스타일링
const Subtitle = styled.div`
  font-size: 18px;
  color: #9d9d9d;
  margin-bottom: 5vh;
`;

// 갤러리 메인 타이틀 컴포넌트
// title: 메인 타이틀
// subtitle: 서브 타이틀
const GalleryMainDescription = ({ title, subtitle }) => {
  // 메인 타이틀을 띄어쓰기 단위로 나누어 배열로 저장
  const titleWords = title.split(' ');

  // 메인 타이틀 단어를 span으로 감싸서 반환
  const titleSpans = titleWords.map((word, index) => (
    <React.Fragment key={index}>
      {
        // index가 3일 경우, <br /> 태그 추가
        index === 3 && <br />
      }
      <span>
        {word}{' '}
      </span>
    </React.Fragment>
  ));

  return (
    <HeaderWrapper>
      <GalleryTitle>{titleSpans}</GalleryTitle>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  );
};

// 갤러리 메인 타이틀 컴포넌트 props 검사
GalleryMainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

// 갤러리 메인 타이틀 컴포넌트
const Title = () => {
  return (
    <GalleryMainDescription
      title="나의 글 목록"
      subtitle="나의 활동 기록들을 확인해보세요"
    />
  );
};

export default Title;

