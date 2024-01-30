import React from 'react';
import styled from 'styled-components';

import GalleryTitle from 'components/Photo/GalleryTitle';
import GallerySwitch from 'components/Photo/GallerySwitch';
import GalleryWriteButton from 'components/Photo/GalleryWriteButton';

const GalleryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const GallerySwitchLayout = styled(GallerySwitch)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GalleryTitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
`;

const GalleryTitleLayout = styled(GalleryTitle)`
  display: flex;
`;

const GalleryWriteButtonLayout = styled(GalleryWriteButton)`
  display: flex;
  flex-direction: column;
`;

const GalleryPage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <GalleryPageContainer>
        <GallerySwitchLayout />
        <GalleryTitleButtonWrapper>
          <GalleryTitleLayout />
          <GalleryWriteButtonLayout />
        </GalleryTitleButtonWrapper>
      </GalleryPageContainer>
    </div>
  );
};

export default GalleryPage;
