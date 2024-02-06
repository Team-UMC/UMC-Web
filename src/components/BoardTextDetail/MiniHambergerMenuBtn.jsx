// MiniHambergerMenuBtn을 구현한 파일

import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as MiniHambergerMenu } from 'assets/MiniHamberMenu.svg';
import MiniHambergerMenuModal from './MiniHambergerMenuModal';

// MiniHambergerMenu 이미지를 스타일링해 사용함
const MiniHambergerMenuImg = styled(MiniHambergerMenu)`
  // 마우스를 올려놓으면 커서가 포인터로 변함
  cursor: pointer;

  // 수정버튼과 삭제버튼을 MiniHambergerMenu이미지를 기준으로 정렬하기 위해 사용
  position: relative;
`;

// 수정버튼과 삭제버튼을 그룹화하기 위해 사용
const ModifyDeleteBtnWrapper = styled.div`
  // 마우스를 올려놓으면 커서가 포인터로 변함
  cursor: pointer;

  // ModifyDeleteBtnAlign을 position이 static이 아닌 첫번째 상위요소인 MiniHambergerMenu를 기준으로 정렬하기 위해 사용
  position: absolute;

  // 박스의 모서리의 각진 정도 조절
  border-radius: 8px;

  // 글씨 두께 설정
  font-weight: bold;

  // 박스그림자를 줘서 border없이도 외부요소와의 가독성이 좋게 함
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  // 박스의 배경색을 부여
  background-color: #ffffff;
  /* right:0; */
`;

// 수정버튼과 삭제버튼에 padding값을 주기 위해 생성
const ModifyDeleteBtn = styled.div`

  // padding값을 할당
  padding: 10px;
`;

// 미니햄버거
const MiniHambergerMenuBtn = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(true);
  };

  const handleModifyClick = () => {
    setIsModify(true);
    setIsModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsModify(false);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setShowButtons(false);
  };

  return (
    <div>
      <MiniHambergerMenuImg alt="더보기" onClick={handleButtonClick} />
      {showButtons && (
        <div>
          <ModifyDeleteBtnWrapper>
            <ModifyDeleteBtn onClick={handleModifyClick}>
              수정하기
            </ModifyDeleteBtn>
            <hr />
            <ModifyDeleteBtn onClick={handleDeleteClick}>
              삭제하기
            </ModifyDeleteBtn>
          </ModifyDeleteBtnWrapper>
        </div>
      )}

      {isModalOpen && (
        <MiniHambergerMenuModal
          onClose={closeModal}
          content={isModify ? '수정하겠습니까?' : '삭제하겠습니까?'}
        />
      )}
    </div>
  );
};

export default MiniHambergerMenuBtn;
