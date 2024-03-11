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
        <styles.BoardTitleLayout />

        <styles.LinkWrapper>
          <styles.StyledNavLink to="/notice/campus">
            학교 공지사항
          </styles.StyledNavLink>
          <styles.StyledNavLink to="/notice/branch">
            지부 공지사항
          </styles.StyledNavLink>
          <styles.StyledNavLink to="/notice/center">
            중앙 공지사항
          </styles.StyledNavLink>
        </styles.LinkWrapper>

        <styles.NoticeTableWrapper>
          <styles.StyledNoticeTable />
        </styles.NoticeTableWrapper>
      </styles.NoticePageContainer>
    </div>
  );
};

export default NoticePage;
