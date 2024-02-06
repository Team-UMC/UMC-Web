import React from 'react';
//, { useState } from 'react';
//import styled from 'styled-components';
//import SignUpFormStyle from 'components/SignUp/SignUpForm.style';
import PropTypes from 'prop-types';
//import PrevButton from './PrevButton';
//import NextButton from './NextButton';

const Operator = (
//   {
//     campusPositions,
//     setCampusPositions,
//     centerPositions,
//     setCenterPositions,
//     handleNextStep,
//     handlePrevStep,
//   },
) => {
  return <div>하이</div>;
  //   const [campus, setCampus] = useState([
  //     '회장',
  //     '부회장',
  //     '운영국장',
  //     'PM 파트장',
  //     'Design 파트장',
  //     'Spring 파트장',
  //     'Node 파트장',
  //     'Web 파트장',
  //     'iOS 파트장',
  //     'Android 파트장',
  //   ]);

  //   const [center, setCenter] = useState([
  //     '회장',
  //     '부회장',
  //     '운영국장',
  //     'PM 파트장',
  //     'Design 파트장',
  //     'Spring 파트장',
  //     'Node 파트장',
  //     'Web 파트장',
  //     'iOS 파트장',
  //     'Android 파트장',
  //   ]);

  //   const addPosition = () => {
  //     const newPosition = prompt('직책 이름을 입력하세요:');
  //     if (newPosition) {
  //       setPositions([...positions, newPosition]);
  //     }
  //   };

  //   const handleCampusButtonClick = (position) => {
  //     if (campus === position) {
  //       handleChange(
  //         { target: { name: 'campusPositions', value: '' } },
  //         'campus',
  //       );
  //       setCampus('');
  //     } else {
  //       handleChange(
  //         { target: { name: 'campusPositions', value: position } },
  //         'campus',
  //       );
  //       setCampus(position);
  //     }
  //   };

  //   const handleCenterButtonClick = (position) => {
  //     if (center === position) {
  //       handleChange(
  //         { target: { name: 'centerPositions', value: '' } },
  //         'center',
  //       );
  //       setCenter('');
  //     } else {
  //       handleChange(
  //         { target: { name: 'centerPositions', value: position } },
  //         'center',
  //       );
  //       setCenter(position);
  //     }
  //   };

  //   return (
  //     <SignUpFormStyle.Wrapper>
  //       <SignUpFormStyle.SignUpFormWrapper>
  //         <h2>직책을 선택해주세요 (캠퍼스)</h2>
  //         <div>
  //           {positions.map((position, index) => (
  //             <input
  //               key={index}
  //               type="button"
  //               name="operater"
  //               value={position}
  //               onClick={() => handleCampusButtonClick(position)}
  //               style={{
  //                 background:
  //                 setCenter === position ? 'lightblue' : 'white',
  //               }}
  //             />
  //           ))}
  //         </div>
  //         <input type="button" value="직책 추가" onClick={addPosition} />

  //         <h2>직책을 선택해주세요 (센터)</h2>
  //         <div>
  //           {positions.map((position, index) => (
  //             <input
  //               key={index}
  //               type="button"
  //               name="operater"
  //               value={position}
  //               onClick={() => handleCenterButtonClick(position)}
  //               style={{
  //                 background:
  //                 setCenter === position ? 'lightblue' : 'white',
  //               }}
  //             />
  //           ))}
  //         </div>
  //         <input type="button" value="직책 추가" onClick={addPosition} />
  //       </SignUpFormStyle.SignUpFormWrapper>

  //       <SignUpFormStyle.StepButtonWrapper>
  //         <PrevButton handlePrevStep={handlePrevStep} />
  //         {userData.campusPositions.length > 0 &&
  //           userData.centerPositions.length > 0 && (
  //             <NextButton handleNextStep={handleNextStep} />
  //           )}
  //       </SignUpFormStyle.StepButtonWrapper>
  //     </SignUpFormStyle.Wrapper>
  //   );
};

Operator.propTypes = {
  campusPositions: PropTypes.node.isRequired,
  setCampusPositions: PropTypes.func.isRequired,
  centerPositions: PropTypes.node.isRequired,
  setCenterPositions: PropTypes.func.isRequired,
  handleNextStep: PropTypes.func.isRequired,
  handlePrevStep: PropTypes.func.isRequired,
};

export default Operator;
