//상세보기 한 글의 제목, 소제목, 삭제와 수정버튼이 있는 페이지
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FixImg from 'assets/todayilearn/fiximg.svg';
import RemoveImg from 'assets/todayilearn/removeimg.svg';

import PMImage from 'assets/Profile/Part/PM.svg';
import DesignImage from 'assets/Profile/Part/Design.svg';
import SpringImage from 'assets/Profile/Part/Spring.svg';
import NodeImage from 'assets/Profile/Part/Node.svg';
import WebImage from 'assets/Profile/Part/Web.svg';
import iOSImage from 'assets/Profile/Part/iOS.svg';
import AndroidImage from 'assets/Profile/Part/Android.svg';
import { useNavigate } from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const StyleImg = styled.img`
  width: 24px;
  height: 32px;
  margin-right: 2vh;
  display: flex;
  align-items: center;
`;

const ImgTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const SubTitle = styled.div`
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 500;
`;

const FixContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ListTIL = ({ tilDetailData, deleteTIL }) => {
  const navigate = useNavigate();

  const renderPartImage = (part) => {
    if (part === 'PM') {
      return <StyleImg src={PMImage} alt="PM" />;
    } else if (part === 'DESIGN') {
      return <StyleImg src={DesignImage} alt="DESIGN" />;
    } else if (part === 'SPRING') {
      return <StyleImg src={SpringImage} alt="SPRING" />;
    } else if (part === 'NODE') {
      return <StyleImg src={NodeImage} alt="NODE" />;
    } else if (part === 'WEB') {
      return <StyleImg src={WebImage} alt="WEB" />;
    } else if (part === 'IOS') {
      return <StyleImg src={iOSImage} alt="IOS" />;
    } else if (part === 'ANDROID') {
      return <StyleImg src={AndroidImage} alt="ANDROID" />;
    }
    return null;
  };

  const handleModifyButton = () => {
    navigate(`/todayilearned/modify/${tilDetailData.todayILearnedId}`);
  };

  return (
    <ListContainer>
      <ImgTitleContainer>
        {renderPartImage(tilDetailData.part)}
        <TitleContainer>
          <MainTitle>{tilDetailData.title}</MainTitle>
          <SubTitle>{tilDetailData.subTitle}</SubTitle>
        </TitleContainer>
      </ImgTitleContainer>

      <FixContainer>
        <img
          src={FixImg}
          alt="수정이미지"
          style={{ cursor: 'pointer' }}
          onClick={(tilDetailData) =>
            handleModifyButton(tilDetailData.todayILearnedId)
          }
        />
        <img
          src={RemoveImg}
          alt="제거이미지"
          style={{ cursor: 'pointer' }}
          onClick={deleteTIL}
        />
      </FixContainer>
    </ListContainer>
  );
};

ListTIL.propTypes = {
  tilDetailData: PropTypes.object.isRequired,
  deleteTIL: PropTypes.func.isRequired,
};

export default ListTIL;
