import React from 'react';
import styled from 'styled-components';

import Photo from 'components/Setting/Profile/Photo';
import Text from 'components/Setting/Profile/Text';
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30vh auto 0 auto;
  width: 60%;
`;

const Ddiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60%;
`;

const Again = styled.div`
  width: 50%;
`;

const ButtonContainer = styled.div`
  display: flex;

  // 적용/취소 버튼 오른쪽 끝으로 고정
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.div`
  width: 10%;

  // 흰색 네모 박스 형태로 만들기
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;

  // 마우스 커서 올리면 커서 변경
  cursor: pointer;
`;

const ProfileSettingPage = () => {
  const navigate = useNavigate();

  const ExitHandler = () => {
    navigate('/');
  };

  // API 연결하여 상태메시지가 수정될 수 있도록 구현해야 함.
  //const ModifyHandler = () => {};

  return (
    <div style={{ backgroundColor: '#F2F5FC' }}>
      <Div>
        <div>프로필 설정 화면입니다.</div>
        <Wrapper>
          <Again>
            <Photo />
          </Again>
          <Ddiv>
            <Text label="이름" description="10자 이내" placeholder="" />
            <Text label="닉네임" description="10자 이내" placeholder="" />
            <Text
              label="상태메세지"
              description="50자 이내"
              placeholder="상태메세지를 입력해주세요"
              customheight="100px"
            />
          </Ddiv>
        </Wrapper>
        <ButtonContainer>
          <Button onClick={ExitHandler}> 취소 </Button>
          <Button onClick={ExitHandler}> 적용 </Button>
        </ButtonContainer>
      </Div>
    </div>
  );
};

export default ProfileSettingPage;
