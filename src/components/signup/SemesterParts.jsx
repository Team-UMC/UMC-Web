import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpFormStyle from 'components/signup/SignUpForm.style';
import PropTypes from 'prop-types';
//import DeletePart from 'assets/signup/DeletePart.svg';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Description = styled.p`
  color: gray;
  font-size: 1vw;
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Dropdown = styled.select`
  display: flex;
  width: 40%;
  height: 30px;
  text-align: center;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const SemesterParts = ({
  semesterParts,
  setSemesterParts,
  handleNextStep,
  handlePrevStep,
}) => {
  const [semester, setSemester] = useState('');
  const [part, setPart] = useState('');

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    if (e.target.value && part) {
      setSemesterParts([...semesterParts, { part, semester: e.target.value }]);
    }
  };

  const handlePartChange = (e) => {
    setPart(e.target.value);
    if (semester && e.target.value) {
      setSemesterParts([...semesterParts, { part: e.target.value, semester }]);
    }
  };

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h1> 기수 및 파트를 선택해주세요 </h1>
        <Description>
          여러 기수에 참여한 경우, 모든 기수와 파트를 추가해주세요!
        </Description>

        <DropdownWrapper>
          <DropdownContainer>
            <Wrapper>
              <Dropdown onChange={handleSemesterChange}>
                <option value="" disabled hidden>
                  기수
                </option>
                <option value="FIRST">1기</option>
                <option value="SECOND">2기</option>
                <option value="THIRD">3기</option>
                <option value="FOURTH">4기</option>
                <option value="FIFTH">5기</option>
                <option value="SIXTH">6기</option>
              </Dropdown>

              <Dropdown onChange={handlePartChange}>
                <option value="" disabled hidden>
                  파트
                </option>
                <option value="PM">PM</option>
                <option value="DESIGN">Design</option>
                <option value="SPRING">Spring</option>
                <option value="NODE">Node</option>
                <option value="WEB">Web</option>
                <option value="IOS">iOS</option>
                <option value="ANDROID">Android</option>
              </Dropdown>
            </Wrapper>
          </DropdownContainer>
        </DropdownWrapper>
      </SignUpFormStyle.SignUpFormWrapper>

      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        <NextButton handleNextStep={handleNextStep} />
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

SemesterParts.propTypes = {
  semesterParts: PropTypes.array.isRequired,
  setSemesterParts: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default SemesterParts;
