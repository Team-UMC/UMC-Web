// 미니햄버거메뉴 버튼(수정하기,삭제하기버튼 포함)을 구현한 파일

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as MiniHambergerMenu } from 'assets/MiniHamberMenu.svg';

//미니햄버거메뉴버튼을 스타일링
const MiniHambergerMenuImg = styled(MiniHambergerMenu)`
  // 마우스를 올려놓으면 커서가 포인터로 변함
  cursor: pointer;

  // 수정버튼과 삭제버튼을 MiniHambergerMenu이미지를 기준으로 정렬하기 위해 사용
  position: relative;
`;
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
`;

// 수정버튼에 padding값을 주기 위해 생성
const ModifyBtn = styled.div`
  padding: 10px;
`;

// 삭제버튼에 padding값을 주기 위해 생성
const DeleteBtn = styled.div`
  padding: 10px;

  // 글씨에 색상 부여
  color: red;
`;

const MiniHambergerBtn = ({ handleModifyClick, handleDeleteClick }) => {
  // 미니햄버거메뉴버튼을 누르면 나올 버튼의 상태
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div>
      <MiniHambergerMenuImg alt="더보기" onClick={handleButtonClick} />
      {showButtons && (
        <div>
          <ModifyDeleteBtnWrapper>
            <ModifyBtn onClick={handleModifyClick}>수정하기</ModifyBtn>
            <hr />
            <DeleteBtn onClick={handleDeleteClick}>삭제하기</DeleteBtn>
          </ModifyDeleteBtnWrapper>
        </div>
      )}
    </div>
  );
};

MiniHambergerBtn.propTypes = {
  handleModifyClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default MiniHambergerBtn;
