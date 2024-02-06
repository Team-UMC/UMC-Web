import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from 'components/Setting/Setting.module.css';
import SendIcon from 'assets/Setting/paper-plane.svg';
import QuestionIcon from 'assets/Setting/question.svg';
import CloseCircleIcon from 'assets/Setting/close-circle.svg';

// 스위치 컨테이너
const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
`;

// 실제 스위치
const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

// 스위치 슬라이더
const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

// 스위치 체크되었을 때 슬라이더
const SwitchCheckedSlider = styled(SwitchSlider)`
  background-color: lightgray;

  ${SwitchInput}:checked + & {
    background-color: black;
  }

  ${SwitchInput}:checked + &:before {
    transform: translateX(12px);
  }
`;

// 스위치 컴포넌트
const Switch = () => (
  <SwitchContainer>
    <SwitchInput type="checkbox" />
    <SwitchCheckedSlider />
  </SwitchContainer>
);

// 아코디언 스타일
const useStyles = makeStyles(() => ({
  root: {
    /* 레이아웃 스타일링 */
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '8px 22px 8px 20px',
    gap: '0 16px',

    /* 외형 스타일링 */
    background: 'white',
    color: 'black',
    borderRadius: 12,

    '&:before': {
      // Accordion 확장 시 보이는 선의 스타일을 제거합니다.
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    expanded: {},
  },
}));

// 자주 묻는 질문 이미지 레이아웃
const SettingCustomerServiceQuestionImg = styled.img`
  padding-right: 12px;

  /* 애니메이션 스타일링 */
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

// 아코디언 요약 컴포넌트
const AccordionSummaryStyle = styled(AccordionSummary)`
  /* 레이아웃 스타일링 */
  display: flex;
  align-items: center;

  /* 아이콘 이미지가 바뀔 때 천천히 사라지거나 나타나는 애니메이션 적용 */
  & ${SettingCustomerServiceQuestionImg} {
    opacity: ${(props) => (props['aria-expanded'] ? 0 : 1)};
  }
`;

// 맞춤 설정 컴포넌트
const CustomSetting = () => {
  return (
    <>
      <div className={styles.settingContentsTitle}>맞춤 설정</div>
      <div className={styles.settingDetailWrapper}>
        <div className={styles.settingDetailTitle}>자동 로그인</div>
        <div className={styles.settingDetailBlock}>
          <div>
            <div className={styles.settingDetailBlockTitle}>
              자동 로그인 허용
            </div>
            <div className={styles.settingDetailBlockContent}>
              자동 로그인을 설정하면, 다음부터는 로그인을 하지 않아도 됩니다.
            </div>
          </div>
          <Switch />
        </div>
      </div>
    </>
  );
};

// 고객 센터 설정 컴포넌트
const CustomerServiceSetting = () => {
  // 아코디언 스타일 적용
  const AccordionClasses = useStyles();
  // 아코디언 확장 여부 상태
  const [expanded, setExpended] = useState(false);

  // 아코디언 확장 함수
  const handleExpand = (panel) => (event, isExpended) => {
    setExpended(isExpended ? panel : false);
  };

  // 자주 묻는 질문 리스트
  const faqList = [
    {
      id: 'friend-add',
      question: '친구추가는 어떻게 하는건가요?',
      answer:
        '이렇게 하면 친구를 추가할 수 있고 어쩌구 저쩌구 이렇게 하면 친구를 추가할 수 있고 어쩌구 저쩌구 이렇게 하면 친구를 추가할 수 있고 어쩌구 저쩌구 이렇게 하면 친구를 추가할 수 있고 어쩌구 저쩌구 이렇게 하면 친구를 추가할 수 있고 어쩌구 저쩌구',
    },
    {
      id: 'go-home',
      question: '집에 가는 방법을 아시나요',
      answer: '네네네넨ㄴㅇ',
    },
    {
      id: 'membership-withdrawal',
      question: '탈퇴는 어떻게 하나요',
      answer: '탈퇴못함ㅋ',
    },
    {
      id: 'auto-login',
      question: '자동로그인 가능한가요?',
      answer: 'AUTO SAVE하는 습관을 기릅시다.',
    },
    { id: 'etc', question: '어쩌구저쩌구는 어떻게 하나요?', answer: 'YES' },
  ];

  return (
    <>
      <div className={styles.settingContentsTitle}>고객 센터</div>
      <div
        className={styles.settingDetailWrapper}
        style={{ marginBottom: '48px' }}
      >
        <div className={styles.settingDetailTitle}>자주 묻는 질문</div>
        {faqList.map((faq, index) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            classes={AccordionClasses}
            onChange={handleExpand(faq.id)}
          >
            <AccordionSummaryStyle
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
            >
              {expanded === faq.id ? (
                <SettingCustomerServiceQuestionImg
                  src={QuestionIcon}
                  alt="question-icon"
                />
              ) : (
                <div className={styles.iconWithNumber}>
                  <SettingCustomerServiceQuestionImg
                    src={CloseCircleIcon}
                    alt="close-circle-icon"
                  />
                  <span className={styles.numberOnIcon}>
                    {faqList.length - index}
                  </span>
                </div>
              )}
              {faq.question}
            </AccordionSummaryStyle>
            <AccordionDetails>{faq.answer}</AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className={styles.settingDetailWrapper}>
        <div className={styles.settingDetailFeedbackToDevWrapper}>
          <div className={styles.settingDetailTitle}>
            개발자에게 피드백 보내기
          </div>
          <textarea
            className={styles.settingDetailFeedbackToDevInput}
            placeholder="개선이 필요한 부분을 적어주세요."
          />
          <div className={styles.settingDetailButtonLayout}>
            <div className={styles.settingDetailFeedbackToDevButton}>
              전송
              <img src={SendIcon} alt="send-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// 웹 정보 설정 컴포넌트
const WebInfoSetting = () => {
  // 웹 정보 리스트
  const webInfoList = [
    { id: 'terms-of-use', title: '이용 약관', content: '이용 약관 내용' },
    {
      id: 'privacy-policy',
      title: '개인정보 처리 방침',
      content: '개인정보 처리 방침 내용',
    },
    {
      id: 'open-source-license',
      title: '오픈소스 라이센스',
      content: '오픈소스 라이센스 내용',
    },
    { id: 'version-info', title: '버전 정보', content: 'ver 3.10.3' },
  ];

  return (
    <>
      <div className={styles.settingContentsTitle}>웹 정보</div>
      <div className={styles.settingDetailWebInfoGap}>
        {webInfoList.map((info) => (
          <div className={styles.settingDetailWrapper} key={info.id}>
            <div className={styles.settingDetailTitle}>{info.title}</div>
            <div className={styles.settingDetailWebInfoContentsBox}>
              {info.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// Welcome UMC 설정 컴포넌트
const UMCInfoSetting = () => {
  // 링크 복사를 위한 ref
  const linkRefs = useRef([]);

  // 링크 복사 함수
  const handleCopy = async (index) => {
    const link = linkRefs.current[index].textContent;
    await navigator.clipboard.writeText(link);
  };

  // UMC SNS 링크 리스트
  const linkInfoList = [
    {
      id: 'umc-campus',
      title: 'UMC inha 인스타그램',
      url: 'https://www.instagram.com/inha_makeus_challenge?igsh=dW1vbW14Y200YmZu',
    },
    {
      id: 'umc-central',
      title: 'UMC 중앙 인스타그램',
      url: 'https://www.instagram.com/inha_makeus_challenge?igsh=dW1vbW14Y200YmZu',
    },
  ];

  return (
    <>
      <div className={styles.settingContentsTitle}>Welcome UMC</div>
      <div className={styles.settingDetailUmcInfoLinkBlockWrapper}>
        {linkInfoList.map((info, index) => (
          <div className={styles.settingDetailWrapper} key={info.id}>
            <div className={styles.settingDetailTitle}>{info.title}</div>
            <div className={styles.settingDetailUmcInfoLinkBlock}>
              <div className={styles.settingDetailBlockTitle}>
                <a
                  style={{ color: 'black' }}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (linkRefs.current[index] = el)}
                >
                  {info.url}
                </a>
              </div>
              <div
                className={styles.settingDetailUmcInfoLinkCopyButton}
                onClick={() => handleCopy(index)}
              >
                복사
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

// 기타 설정 컴포넌트
const EtcSetting = () => {
  return (
    <>
      <div className={styles.settingContentsTitle}>기타</div>
      <div
        className={styles.settingDetailWrapper}
        style={{ marginBottom: '48px' }}
      >
        <div className={styles.settingDetailTitle}>로그아웃</div>
        <div
          className={styles.settingDetailBlock}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div className={styles.settingDetailBlockTitle}>로그아웃</div>
          <div className={styles.settingDetailBlockContent}>
            이 웹사이트에서 로그아웃할 수 있습니다.
          </div>
        </div>
        <div className={styles.settingDetailButtonLayout}>
          <div className={styles.settingDetailEtcLogoutButton}>로그아웃</div>
        </div>
      </div>
      <div className={styles.settingDetailWrapper}>
        <div className={styles.settingDetailTitle}>탈퇴 약관</div>
        <div className={styles.settingDetailWebInfoContentsBox}>
          탈퇴 약관입니다.
        </div>
        <div className={styles.settingDetailButtonLayout}>
          <div className={styles.settingDetailEtcWithdrawButton}>탈퇴</div>
        </div>
      </div>
    </>
  );
};

// 설정 컨텐츠 컴포넌트
const SettingContents = () => {
  // 현재 페이지의 링크 파라미터
  const { contents } = useParams();

  return (
    <div className={styles.settingContentsContainer}>
      {contents === 'custom' && <CustomSetting />}
      {contents === 'customer-service' && <CustomerServiceSetting />}
      {contents === 'web-info' && <WebInfoSetting />}
      {contents === 'umc-sns' && <UMCInfoSetting />}
      {contents === 'etc' && <EtcSetting />}
    </div>
  );
};

export default SettingContents;
