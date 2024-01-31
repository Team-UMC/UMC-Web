import React from 'react';
import styled from 'styled-components';

import GalleryTitle from 'components/Gallery/GalleryTitle';
import GalleryWriteButton from 'components/Gallery/GalleryWriteButton';
import GalleryList from 'components/Gallery/GalleryList';

const GalleryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  z-index: 1;
`;

const GalleryTitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
`;

const GalleryTitleLayout = styled(GalleryTitle)`
  display: flex;
`;

const GalleryWriteButtonLayout = styled(GalleryWriteButton)`
  display: flex;
  flex-direction: column;
`;

const GalleryListLayout = styled(GalleryList)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GalleryPage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GalleryPageContainer>
        <GalleryTitleButtonWrapper>
          <GalleryTitleLayout />
          <GalleryWriteButtonLayout />
        </GalleryTitleButtonWrapper>
        <GalleryListLayout />
      </GalleryPageContainer>
    </div>
  );
};

export default GalleryPage;
