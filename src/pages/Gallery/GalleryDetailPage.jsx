import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { GALLERY_DATAS } from 'components/Gallery/GalleryData';
import GalleryDetailProfile from 'components/Gallery/GalleryDetail/GalleryDetailProfile';
import GalleryListButton from 'components/Gallery/GalleryDetail/GalleryListButton';

const GalleryDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: 'Pretendard';
  word-wrap: break-word;
`;

const GalleryDetailProfileLayout = styled(GalleryDetailProfile)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 24px;
`;

const GalleryDetailTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  color: black;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 12px;
`;

const GalleryDetailContentTimeViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const GalleryDetailContent = styled.div`
  display: flex;
  color: black;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
`;

const GalleryDetailTimeViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  gap: 0 16px;
`;

const GalleryDetailImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 12px;
`;

const GalleryDetailImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

const GalleryDetailListButtonLayout = styled.div`
  align-self: flex-end;
  padding-top: 16px;
  padding-bottom: 45px;
`;

const GalleryDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const item = GALLERY_DATAS.find((item) => item.id === Number(id));

  const handleListButtonClick = () => {
    navigate('/gallery');
  };

  if (!item) {
    return <div>존재하지 않는 갤러리입니다.</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <GalleryDetailPageContainer>
        <GalleryDetailProfileLayout id={item.id} item={item} />
        <GalleryDetailTitle>{item.title}</GalleryDetailTitle>
        <GalleryDetailContentTimeViewWrapper>
          <GalleryDetailContent>{item.content}</GalleryDetailContent>
          <GalleryDetailTimeViewWrapper>
            <div>작성일 | {item.time}</div>
            <div>조회수 | {item.view}</div>
          </GalleryDetailTimeViewWrapper>
        </GalleryDetailContentTimeViewWrapper>
        <GalleryDetailImageWrapper>
          {item.src.map((src, index) => (
            <GalleryDetailImage key={index} src={src} alt="gallery" />
          ))}
        </GalleryDetailImageWrapper>
        <GalleryDetailListButtonLayout>
          <GalleryListButton onClick={handleListButtonClick} />
        </GalleryDetailListButtonLayout>
      </GalleryDetailPageContainer>
    </div>
  );
};

export default GalleryDetailPage;
