import React from 'react';
import styled from 'styled-components';
import SignUpFormStyle from 'components/SignUp/SignUpForm.style';
import PropTypes from 'prop-types';
//import DeletePart from 'assets/signup/DeletePart.svg';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Description = styled.p`
  color: gray;
  font-size: 1vw;
`;

const DropdownWrapper = styled.div`
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

// const AddButton = styled.div`
//   width: 40%;
//   height: 30px;
//   display: flex;
//   background-color: white;
//   color: black;
//   border: none;
//   border-radius: 15px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// const DeleteButton = styled.img`
//   display: flex;
//   cursor: pointer;
// `;

const SemesterParts = ({ userData, setUserData, handleNextStep, handlePrevStep }) => {
  const { semesterParts } = userData;

  const handlePairChange = (e, index, property) => {
    const { value } = e.target;

    setUserData((prevData) => ({
      ...prevData,
      semesterParts: prevData.semesterParts.map((pair, i) =>
        i === index ? { ...pair, [property]: value } : pair
      ),
    }));
  };

  const canMoveToNextStep = semesterParts.some(
    (pair) => pair.part !== '' && pair.semester !== '',
  );

  return (
    <SignUpFormStyle.Wrapper>
      <SignUpFormStyle.SignUpFormWrapper>
        <h1> 기수 및 파트를 선택해주세요 </h1>
        <Description>
          여러 기수에 참여한 경우, 모든 기수와 파트를 추가해주세요!
        </Description>

        <DropdownWrapper>
          {semesterParts.map((pair, index) => (
            <Wrapper key={index}>
              <Dropdown
                value={pair.semester}
                onChange={(e) => handlePairChange(e, index, 'semester')}
              >
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

              <Dropdown
                value={pair.part}
                onChange={(e) => handlePairChange(e, index, 'part')}
              >
                <option value="" disabled hidden>
                  파트
                </option>
                <option value="PM">PM</option>
                <option value="Design">Design</option>
                <option value="Spring">Spring</option>
                <option value="Node">Node</option>
                <option value="Web">Web</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
              </Dropdown>

              {/*<DeleteButton
                src={DeletePart}
                onClick={() => deletePair(index)}
          />*/}
            </Wrapper>
          ))}
        </DropdownWrapper>

        {/*<AddButton onClick={addPair}>기수 추가</AddButton>*/}
      </SignUpFormStyle.SignUpFormWrapper>

      <SignUpFormStyle.StepButtonWrapper>
        <PrevButton handlePrevStep={handlePrevStep} />
        {canMoveToNextStep && <NextButton handleNextStep={handleNextStep} />}
      </SignUpFormStyle.StepButtonWrapper>
    </SignUpFormStyle.Wrapper>
  );
};

SemesterParts.propTypes = {
  userData: PropTypes.object.isRequired,
  setUserData: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default SemesterParts;
