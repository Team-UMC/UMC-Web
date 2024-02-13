import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'apis/setting';

import styled from 'styled-components';

import Photo from 'components/Setting/Profile/Photo';
import Text from 'components/Setting/Profile/Text';

import ProfileSettingTitle from 'components/Setting/Profile/ProfileSettingTitle';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  width: 60%;
  height: 95vh;
  justify-content: space-evenly;
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
  height: 40%;
`;

const Again = styled.div`
  width: 30%;
`;

const ButtonContainer = styled.div`
  display: flex;

  // 적용/취소 버튼 오른쪽 끝으로 고정
  justify-content: flex-end;
  width: 100%;
`;

const Button = styled.div`
  width: 8%;
  height: 40px;

  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  // 흰색 네모 박스 형태로 만들기
  border: 1px solid white;
  border-radius: 5px;
  background-color: white;

  // 마우스 커서 올리면 커서 변경
  cursor: pointer;
`;

const ProfileSettingPage = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

  const ExitHandler = () => {
    navigate('/main');
  };

  const handleImageChange = (file) => {
    setImageFile(file);
  };

  // 서버로부터 내 프로필 정보 받아오는 함수
  useEffect(() => {
    const getProfile = async () => {
      const res = await axiosInstance.get('/members');

      setName(res.data.result.name);
      setNickname(res.data.result.nickname);
      setStatusMessage(res.data.result.statusMessage);
    };
    getProfile();
  }, [name, nickname, statusMessage]);

  // 적용 버튼을 통해 내 상태메세지 변경하기
  const changeProfile = async () => {
    const formData = new FormData();

    if (imageFile) {
      formData.append('profileImage', imageFile);
    }

    formData.append(
      'request',
      JSON.stringify({
        name: name,
        nickname: nickname,
        statusMessage: statusMessage,
      }),
    );

    console.log('FormData:', formData);
    console.log('Status Message:', formData.get('request'));

    try {
      const res = await axiosInstance.post('/members/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response: ', res.data);

    } catch (error) {
      console.error('Error occurred: ', error);
    }
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Div>
        <ProfileSettingTitle />
        <Wrapper>
          <Again>
            <Photo onImageChange={handleImageChange} />
          </Again>
          <Ddiv>
            <Text
              label="이름"
              description="10자 이내"
              placeholder=""
              defaultValue={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Text
              label="닉네임"
              description="10자 이내"
              placeholder=""
              defaultValue={nickname}
              onChange={(event) => setNickname(event.target.value)}
            />
            <Text
              label="상태메세지"
              description="50자 이내"
              placeholder="상태메세지를 입력해주세요"
              customheight="100px"
              defaultValue={statusMessage}
              onChange={(event) => setStatusMessage(event.target.value)}
            />
          </Ddiv>
        </Wrapper>
        <ButtonContainer>
          <Button onClick={ExitHandler}> 취소 </Button>
          <Button onClick={changeProfile}> 적용 </Button>
        </ButtonContainer>
      </Div>
    </div>
  );
};

export default ProfileSettingPage;
