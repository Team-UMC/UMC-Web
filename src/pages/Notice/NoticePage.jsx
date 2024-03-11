import React from 'react';
import styles from './styles';

const NoticePage = () => {
  return (
    <div
      className="board-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <styles.NoticePageContainer>
        {/* <styles.BoardTitleLayout /> */}
        {/* <styles.BoardBoxAndBoardTableWrapper> */}
        {/* <styles.StyledBoardBox /> */}
        <styles.NoticeTableWrapper>
          <styles.StyledNoticeTable />
        </styles.NoticeTableWrapper>
        {/* </styles.BoardBoxAndBoardTableWrapper> */}
      </styles.NoticePageContainer>
    </div>
  );
};

export default NoticePage;
