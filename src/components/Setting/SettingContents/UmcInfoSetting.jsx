import React, { useRef } from 'react';
import {
  SettingContentsTitle,
  SettingDetailBlockTitle,
  SettingDetailTitle,
  SettingDetailUmcInfoLinkBlock,
  SettingDetailUmcInfoLinkBlockWrapper,
  SettingDetailUmcInfoLinkCopyButton,
  SettingDetailWrapper,
} from 'components/Setting/Setting.style';

// Welcome UMC 설정 컴포넌트
const UmcInfoSetting = () => {
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
      <SettingContentsTitle>Welcome UMC</SettingContentsTitle>
      <SettingDetailUmcInfoLinkBlockWrapper>
        {linkInfoList.map((info, index) => (
          <SettingDetailWrapper key={info.id}>
            <SettingDetailTitle>{info.title}</SettingDetailTitle>
            <SettingDetailUmcInfoLinkBlock>
              <SettingDetailBlockTitle>
                <a
                  style={{ color: 'black' }}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (linkRefs.current[index] = el)}
                >
                  {info.url}
                </a>
              </SettingDetailBlockTitle>
              <SettingDetailUmcInfoLinkCopyButton
                onClick={() => handleCopy(index)}
              >
                복사
              </SettingDetailUmcInfoLinkCopyButton>
            </SettingDetailUmcInfoLinkBlock>
          </SettingDetailWrapper>
        ))}
      </SettingDetailUmcInfoLinkBlockWrapper>
    </>
  );
};

export default UmcInfoSetting;
