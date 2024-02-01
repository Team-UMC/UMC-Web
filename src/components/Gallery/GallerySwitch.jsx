import React, { useState } from 'react';
import styled from 'styled-components';

const GallerySwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0 45px;
  padding-bottom: 70px;
`;

const GallerySwitchFont = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: 'Pretendard';
  font-weight: 600;
  word-wrap: break-word;
  color: ${(props) => (props.active ? '#000c76' : '#999999')};
  padding-bottom: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000c76;
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    transform: scaleX(${(props) => (props.active ? 1 : 0)});
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  transition: color 0.3s ease;
`;

const GallerySwitch = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ['학교 사진첩', '지부 사진첩', '연합 사진첩'];
  return (
    <GallerySwitchWrapper>
      {titles.map((title, index) => (
        <GallerySwitchFont
          key={index}
          active={index === activeIndex}
          onClick={() => setActiveIndex(index)}
        >
          {title}
        </GallerySwitchFont>
      ))}
    </GallerySwitchWrapper>
  );
};

export default GallerySwitch;
