// ProfileContainer파일을 스타일링하는 파일

import styled from 'styled-components';

const ProfileImgTextWrapper = styled.div`      // 프로필 사진과 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
  display: flex;
  gap: 0.3vw;                                  // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
`;

const ProfileWrapper = styled.div`             // 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
  display: flex;
  flex-direction: column;                      // column방향으로 배열
  justify-content: center;                     // center로 배치
`;

const NameNickname = styled.p`                 // 닉네임/이름에 스타일링하기 위해 사용
  color: #000000;                            // 글씨색을 부여
  font-family: 'Pretendard';
  font-size: 1em;                              // 글씨 크기 설정
  font-weight: bold;                           //글씨 두께를 두껍게 하기위해 사용
  letter-spacing: -1.4px;                      // 글씨 사이의 간격 조절
`;

const CohortPart = styled.p`                   // 기수/파트에 스타일링하기 위해 사용
  color: #9d9d9d;                            // 글씨색을 부여
  font-family: 'Pretendard';
  font-size: 0.9em;                            // 글씨 크기 설정
  font-weight: 600;                            //글씨 두께 설정
  letter-spacing: -1.4px;                      // 글씨 사이의 간격 조절
`;

export {
  ProfileImgTextWrapper,
  ProfileWrapper,
  NameNickname,
  CohortPart,
};
