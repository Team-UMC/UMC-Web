import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 34px;
  color: #00095c;
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: #9d9d9d;
`;

const GalleryMainDescription = ({ title, subtitle }) => {
  const titleWords = title.split(' ');

  const titleSpans = titleWords.map((word, index) => (
    <React.Fragment key={index}>
      {index === 3 && <br />}
      <span
        style={{
          textEmphasisStyle: index === 2 ? 'circle' : 'none',
          color: index === 2 ? '#7682F6' : 'inherit',
        }}
      >
        {word}{' '}
      </span>
    </React.Fragment>
  ));

  return (
    <HeaderWrapper>
      <Title>{titleSpans}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  );
};

GalleryMainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const GalleryTitle = () => {
  return (
    <GalleryMainDescription
      title="인하대 사진첩"
      subtitle="우리학교의 소중한 추억들"
    />
  );
};

export default GalleryTitle;
