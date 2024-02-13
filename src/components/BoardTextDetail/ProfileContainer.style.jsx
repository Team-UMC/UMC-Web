// ProfileContainer파일을 스타일링하는 파일

import styled from 'styled-components';

// 프로필 사진과 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
const ProfileImgTextWrapper = styled.div`
  display: flex;

  // 프로필 사진과 (닉네임/이름, 기수/파트)그룹 사이의 간격을 조절하기 위해 사용
  gap: 0.3vw;
`;

// 닉네임/이름, 기수/파트를 그룹화 하기 위해 사용
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 닉네임/이름에 스타일링하기 위해 사용
const NameNickname = styled.p`
  // 글씨 스타일링
  color: #000000;
  font-family: 'Pretendard';
  font-size: 1em;
  font-weight: bold;
  letter-spacing: -1.4px;
`;

// 기수/파트에 스타일링하기 위해 사용
const CohortPart = styled.p`
  // 글씨 스타일링
  color: #9d9d9d;
  font-family: 'Pretendard';
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: -1.4px;
`;

export { ProfileImgTextWrapper, ProfileWrapper, NameNickname, CohortPart };
