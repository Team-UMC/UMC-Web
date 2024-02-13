import React, { useState } from 'react';
import styled from 'styled-components';

import BoardType from 'components/MyWriting/BoardType';
import Title from 'components/MyWriting/Title';
import Type from 'components/MyWriting/Type';
import TypeComponent from 'components/MyWriting/TypeComponent';

//import CommentList from './CommentList.jsx';
<<<<<<< HEAD
=======
//import AdminTitle from 'components/Management/NoticePin/AdminTitle';
>>>>>>> 604bb3ccc15199d0a6d078a43c027d325e8f03d0

const ContainerGrid = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0vh 50vh;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

<<<<<<< HEAD
=======


>>>>>>> 604bb3ccc15199d0a6d078a43c027d325e8f03d0
const MyWrite = () => {
  const [activeType, setActiveType] = useState({
    writingButton: true,
    commentButton: false,
    goodButton: false,
  });

  const handleTypeClick = (type) => {
    setActiveType((typeStates) => ({
      writingButton: type === '작성글' ? !typeStates.writingButton : false,
      commentButton: type === '작성댓글' ? !typeStates.commentButton : false,
      goodButton: type === '좋아요한글' ? !typeStates.goodButton : false,
    }));
  };

  return (
    <ContainerGrid>
<<<<<<< HEAD
      <Title />

=======
    
    <Title />
    
>>>>>>> 604bb3ccc15199d0a6d078a43c027d325e8f03d0
      <TypeContainer>
        <Type activeType={activeType} handleTypeClick={handleTypeClick} />
      </TypeContainer>

      <BoardType />
      <TypeComponent activeType={activeType} />
    </ContainerGrid>
  );
};

export default MyWrite;
