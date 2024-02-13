import styled from 'styled-components';
// import Message from 'components/Message/Message';

// const MessageUsingCursor=styled(Message)`
//   cursor:pointer;
// `

const BackgroundStyle = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const UserName2 = styled.h2`
  padding: 2vh 0;
  display: flex;
  justify-content: center;
`;

const MessageBoxStyle = styled.div`
  display: flex;
  gap: 4vw;
  height: 70%;
  width:100%;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  /* word-wrap: break-word; */

  overflow-wrap: break-word;
  overflow: auto;
`;

const AllDeleteBtn = styled.div`
  padding: 10px;
  position: absolute;
  top: 3vh;
  white-space: nowrap;

  border-radius: 8px;
  background-color: #636363;
  color: #ffffff;
`;

const HambergerMenuAlignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 2vw;
  cursor: pointer;
`;

const UserInfoAndMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// const MessageSelect = styled(Message)`
// background-color: ${selected ? '#FFFFFF' : '#EAEAFF'};
// `;

const InputAlignBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export {
  BackgroundStyle,
  UserName2,
  MessageBoxStyle,
  MessageBox,
  AllDeleteBtn,
  HambergerMenuAlignBox,
  UserInfoAndMenu,
  InputAlignBox,
  // MessageUsingCursor
  //   MessageSelect,
};
