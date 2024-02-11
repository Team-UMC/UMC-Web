import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid gray;
  border-radius: 12px;
  background-color: #f6f6f6;
  z-index: 1000;
`;

const ExitButton = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

const ProfileImageWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const ProfileImage = styled.img`
  position: relative;
  z-index: 100;

  width: 254px;
  height: 254px;
`;

const ProfileSettingImage = styled.img`
  cursor: pointer;

  position: absolute;
  bottom: 20px;
  right: 20px;

  z-index: 101;
`;

const SettingIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const School = styled.div`
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;

  width: 100px;

  text-align: center;
`;

const SemesterPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const PartNSemesterWrapper = styled.div`
  width: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;

  text-align: center;
`;

const StatusMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;

  background-color: white;
  border: 1px solid white;
  border-radius: 15px;
`;

const IconWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconDescription = styled.p`
  font-size: 10px;
`;

export {
  Modal,
  ExitButton,
  ProfileImageWrapper,
  ProfileImage,
  ProfileSettingImage,
  SettingIconWrapper,
  School,
  SemesterPart,
  PartNSemesterWrapper,
  StatusMessageWrapper,
  IconWrapper,
  IconDescription,
};
