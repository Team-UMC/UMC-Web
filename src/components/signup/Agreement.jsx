import React, { useState } from 'react';
import SignUpFormWrapper from './SignUpForm.style';

const Agreement = () => {
  const [termsAgreement, setTermsAgreement] = useState(false);
  const [privacyAgreement, setPrivacyAgreement] = useState(false);

  return (
    <SignUpFormWrapper>
      <p>약관 동의 화면</p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={termsAgreement && privacyAgreement}
            onChange={() => {
              setTermsAgreement(!termsAgreement);
              setPrivacyAgreement(!termsAgreement);
            }}
          />
          약관 전체동의
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={termsAgreement}
            onChange={() => setTermsAgreement(!termsAgreement)}
          />
          이용약관 동의(필수)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={privacyAgreement}
            onChange={() => setPrivacyAgreement(!privacyAgreement)}
          />
          개인정보 수집 및 이용동의(필수)
        </label>
      </div>
    </SignUpFormWrapper>
  );
};

export default Agreement;
