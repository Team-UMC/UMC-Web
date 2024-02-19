import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
//import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SendIcon from 'assets/Setting/paper-plane.svg';
import QuestionIcon from 'assets/Setting/question.svg';
import CloseCircleIcon from 'assets/Setting/close-circle.svg';
import {
  IconWithNumber,
  NumberOnIcon,
  SettingContentsTitle,
  SettingDetailButtonLayout,
  SettingDetailFeedbackToDevButton,
  SettingDetailFeedbackToDevTextArea,
  SettingDetailFeedbackToDevWrapper,
  SettingDetailTitle,
  SettingDetailWrapper,
} from 'components/Setting/Setting.style';

// // 아코디언 스타일
// const useStyles = makeStyles(() => ({
//   root: {
//     /* 레이아웃 스타일링 */
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: '8px 22px 8px 20px',
//     gap: '0 16px',

//     /* 외형 스타일링 */
//     background: 'white',
//     color: 'black',
//     borderRadius: 12,

//     '&:before': {
//       // Accordion 확장 시 보이는 선의 스타일을 제거합니다.
//       display: 'none',
//     },
//     '&$expanded': {
//       margin: 'auto',
//     },
//     expanded: {},
//   },
// }));

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

// 고객 센터 설정 컴포넌트
const CustomerServiceSetting = () => {
  // 아코디언 스타일 적용
  //const AccordionClasses = useStyles();
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
      <SettingContentsTitle>고객 센터</SettingContentsTitle>
      <SettingDetailWrapper style={{ marginBottom: '48px' }}>
        <SettingDetailTitle>자주 묻는 질문</SettingDetailTitle>
        {faqList.map((faq, index) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            //classes={AccordionClasses}
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
                <IconWithNumber>
                  <SettingCustomerServiceQuestionImg
                    src={CloseCircleIcon}
                    alt="close-circle-icon"
                  />
                  <NumberOnIcon>{faqList.length - index}</NumberOnIcon>
                </IconWithNumber>
              )}
              {faq.question}
            </AccordionSummaryStyle>
            <AccordionDetails>{faq.answer}</AccordionDetails>
          </Accordion>
        ))}
      </SettingDetailWrapper>
      <SettingDetailWrapper>
        <SettingDetailFeedbackToDevWrapper>
          <SettingDetailTitle>개발자에게 피드백 보내기</SettingDetailTitle>
          <SettingDetailFeedbackToDevTextArea placeholder="개선이 필요한 부분을 적어주세요." />
          <SettingDetailButtonLayout>
            <SettingDetailFeedbackToDevButton>
              전송
              <img src={SendIcon} alt="send-icon" />
            </SettingDetailFeedbackToDevButton>
          </SettingDetailButtonLayout>
        </SettingDetailFeedbackToDevWrapper>
      </SettingDetailWrapper>
    </>
  );
};

export default CustomerServiceSetting;
