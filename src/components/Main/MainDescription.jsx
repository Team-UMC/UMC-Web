import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin: 112px auto 65px auto;
  width: 70%;
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

const MainDescription = ({ title, subtitle }) => {
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
        {word}
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

MainDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default MainDescription;
