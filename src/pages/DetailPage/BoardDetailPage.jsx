import React, { useState } from 'react';
import axiosInstance from 'apis/setting';
import styled from 'styled-components';

import BoardBox from 'components/BoardBox/BoardBox';
import BoardDetail from 'components/BoardTextDetail/BoardDetail';
import CommentBox from 'components/BoardTextDetail/CommentBox';
import CommentWriteBox from 'components/BoardTextDetail/CommentWriteBox';
//import BoardTitle from 'components/BoardTitle/BoardTitle';
import Copy from 'components/BoardTitle/Copy';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;

  margin-top: 20vh;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
`;

const BoardDetailPage = () => {
  const currentURL = window.location.href;

  // /로 구분하여 배열로 저장하고 host 값과 board 값 변수에 저장하기
  const urlParts = currentURL.split('/');
  const boardId = urlParts[6];

  const [boardDetailData, setBoardDetailData] = useState({});

  const [commentData, setCommentData] = useState([]);

  const getBoardDetail = async () => {
    try {
      const res = await axiosInstance.get(`/boards/${boardId}`);
      setBoardDetailData(res.data.result);
    } catch (error) {
      console.error();
    }
  };

  const getBoardComment = async () => {
    try {
      const res = await axiosInstance.get(`/boards/comments/${boardId}?page=0`);
      setCommentData(res.data.result.boardCommentPageElements);
    } catch (error) {
      console.error();
    }
  };

  const boardLike = async () => {
    try {
      await axiosInstance.post(`/boards/${boardId}/heart`, {
        boardId: boardId,
      });
      setBoardDetailData((prevData) => ({
        ...prevData,
        liked: !prevData.liked,
        heartCount: prevData.liked
          ? prevData.heartCount - 1
          : prevData.heartCount + 1,
      }));
    } catch (error) {
      console.error();
    }
  };

  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Copy />
      <Container>
        <BoardBox />
        <RightWrapper>
          <BoardDetail
            boardDetailData={boardDetailData}
            boardLike={boardLike}
            getBoardDetail={getBoardDetail}
          />
          {commentData && (
            <CommentBox
              commentData={commentData}
              getBoardComment={getBoardComment}
            />
          )}
          <CommentWriteBox boardDetailData={boardDetailData} />
        </RightWrapper>
      </Container>
    </div>
  );
};

export default BoardDetailPage;
