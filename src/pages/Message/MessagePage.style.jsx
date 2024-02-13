import styled from 'styled-components';
// import Message from 'components/Message/Message';

const BackgroundStyle = styled.div`
  width: 100%;
  background-color: #f2f5fc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items:flex-start; */
`;

const UserName2 = styled.h2`
  padding: 2vh 0;
  display: flex;
  justify-content: center;
`;

const MessageBoxStyle = styled.div`
  display: flex;
  justify-content: center;
  gap: 4vw;
  height: 70%;
`;

const MessageBox = styled.div`
  width: 25%;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;

  overflow: auto;
`;

const AllDeleteBtn = styled.div`
  padding: 10px;
  /* position:absolute; */
  border-radius: 8px;
  background-color: #636363;
  color: #ffffff;
`;

const HambergerMenuAlignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
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
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
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
//   MessageSelect,
};
