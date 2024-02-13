import styled, { keyframes } from 'styled-components';

/* 설정 내용 컨테이너 */
const SettingContentsContainer = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  width: 100%;

  /* 폰트 스타일링 */
  font-family: 'Pretendard';
  word-wrap: break-word;
  cursor: default;
`;

/* 설정 내용 타이틀 */
const SettingContentsTitle = styled.div`
  margin-bottom: 36px;

  /* 폰트 스타일링 */
  color: #8784ff;
  font-size: 28px;
  font-weight: 600;
`;

/* 상세 설정 감싸는 레이아웃 */
const SettingDetailWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* 상세 설정 타이틀 */
const SettingDetailTitle = styled.div`
  /* 폰트 스타일링 */
  color: black;
  font-size: 18px;
  font-weight: 500;
`;

/* 상세 설정 블록 */
const SettingDetailBlock = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 20px;

  /* 외형 스타일링 */
  background: white;
  color: black;
  border-radius: 12px;
`;

/* 상세 설정 블록 타이틀 */
const SettingDetailBlockTitle = styled.div`
  /* 폰트 스타일링 */
  font-size: 16px;
  font-weight: 500;
`;

/* 상세 설정 블록 내용 */
const SettingDetailBlockContent = styled.div`
  /* 폰트 스타일링 */
  font-size: 14px;
  font-weight: 300;
`;

/* 고객센터의 자주 찾는 질문에서 번호를 표시하는 컴포넌트 */
const NumberOnIcon = styled.span`
  /* 위치 조정 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%, -70%);

  /* 폰트 스타일링 */
  color: black;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

/* 고객센터의 자주 찾는 질문에서 아이콘과 번호를 포함하는 부모 컴포넌트 */
const IconWithNumber = styled.div`
  position: relative;

  /* 애니메이션 스타일링 */
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

/* 고객 센터 개발자에게 피드백 보내기 감싸는 레이아웃 */
const SettingDetailFeedbackToDevWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* 고객 센터 개발자에게 피드백 보내기 입력창 */
const SettingDetailFeedbackToDevTextArea = styled.textarea`
  /* 외형 스타일링 */
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  height: 10vh;
  vertical-align: top;
  border: none;

  /* 크기 조절 불가능 */
  resize: none;

  /* 세로 스크롤 기능 */
  overflow-y: scroll;
`;

/* 버튼 레이아웃 */
const SettingDetailButtonLayout = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: flex-end;
`;

/* 깜빡이는 애니메이션 정의 */
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

/* 고객 센터 개발자에게 피드백 보내기 버튼 */
const SettingDetailFeedbackToDevButton = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2px;

  /* 외형 스타일링 */
  padding: 6px 8px 6px 12px;
  background: white;
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;

  /* 폰트 스타일링 */
  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;

  /* hover 상태에서의 변화를 부드럽게 */
  transition: border 0.3s ease-in-out;

  /* hover 상태일 때 테두리 굵게 */
  &:hover {
    border: 2px solid black;
  }

  /* active 상태일 때 깜빡이는 애니메이션 적용 */
  &:active {
    animation: ${blink} 0.5s linear infinite;
  }
`;

/* 웹 정보 간격 설정을 위한 레이아웃 */
const SettingDetailWebInfoGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

/* 웹 정보 이용약관/개인정보/오픈소스/버전/탈퇴 약관 */
const SettingDetailWebInfoContentsBox = styled.div`
  /* 외형 스타일링 */
  height: 10vh;
  padding: 16px 20px;
  border-radius: 12px;
  border: none;
  color: #bcbcbc;
  font-size: 14px;
  font-weight: 400;
  resize: none;

  /* 세로 스크롤 기능 */
  overflow-y: scroll;

  /* 드래그 방지 */
  user-select: none;
`;

/* UMC SNS 인스타그램 링크 감싸는 레이아웃 */
const SettingDetailUmcInfoLinkBlockWrapper = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: column;

  gap: 24px;
`;

/* UMC SNS 인스타그램 링크 감싸는 블록 */
const SettingDetailUmcInfoLinkBlock = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 8px 20px;

  /* 외형 스타일링 */
  background: white;
  color: black;
  border-radius: 12px;
`;

/* UMC SNS 인스타그램 링크 복사 버튼 */
const SettingDetailUmcInfoLinkCopyButton = styled.div`
  /* 레이아웃 & 외형 스타일링 */
  padding: 6px 12px;
  background: black;
  border-radius: 20px;

  /* 폰트 스타일링 */
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  cursor: pointer;

  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  /* 버튼 호버 시 효과 */
  &:hover {
    background: gray;
    color: black;
  }

  /* 버튼 클릭 시 효과 */
  &:active {
    background: darkgray;
    color: white;
  }
`;
/* 기타 로그아웃 약관 버튼 */
const SettingDetailEtcLogoutButton = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  padding: 6px 8px;

  /* 폰트 스타일링 */
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;

  /* 외형 스타일링 */
  background: white;
  color: black;
  border-radius: 12px;
  cursor: pointer;

  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  /* 버튼 호버 시 효과 */
  &:hover {
    background: gray;
    color: white;
  }

  /* 버튼 클릭 시 효과 */
  &:active {
    background: darkgray;
    color: black;
  }
`;

/* 기타 로그아웃 약관 버튼 */
const SettingDetailEtcWithdrawButton = styled.div`
  /* 레이아웃 스타일링 */
  display: flex;
  padding: 6px 8px;

  /* 폰트 스타일링 */
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;

  /* 외형 스타일링 */
  background: white;
  color: red;
  border-radius: 12px;
  cursor: pointer;

  /* 애니메이션 효과 */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  /* 버튼 호버 시 효과 */
  &:hover {
    background: red;
    color: white;
  }

  /* 버튼 클릭 시 효과 */
  &:active {
    background: darkred;
    color: white;
  }
`;

export {
  SettingContentsContainer,
  SettingContentsTitle,
  SettingDetailWrapper,
  SettingDetailTitle,
  SettingDetailBlock,
  SettingDetailBlockTitle,
  SettingDetailBlockContent,
  NumberOnIcon,
  IconWithNumber,
  SettingDetailFeedbackToDevWrapper,
  SettingDetailFeedbackToDevTextArea,
  SettingDetailButtonLayout,
  SettingDetailFeedbackToDevButton,
  SettingDetailWebInfoGap,
  SettingDetailWebInfoContentsBox,
  SettingDetailUmcInfoLinkBlockWrapper,
  SettingDetailUmcInfoLinkBlock,
  SettingDetailUmcInfoLinkCopyButton,
  SettingDetailEtcLogoutButton,
  SettingDetailEtcWithdrawButton,
};
