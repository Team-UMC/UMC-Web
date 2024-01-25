import styled from 'styled-components';
<<<<<<< HEAD
import BackgroundImage from 'assets/signup/background.svg';
import NocontentsBackgroundImage from 'assets/signup/NoContentsBackground.svg';

const StartButton = styled.div`
  height: 6vh;
  width: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: #000c76;
  background: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  font-weight: bold;
  margin-left: 27%;
  margin-top: 45vh;
  border-radius: 30px;

  &:hover {
    transform: scale(1.2);
  }
`;
=======
import Background from 'assets/signup/background.svg';
>>>>>>> 87d52ab1a18af2c7c202227066898f461cbd26a5

const SignUpPageContainer = styled.div`
  height: 100vh;
  display: flex;
  background: ${({ step }) => {
    switch (step) {
      case 0:
        return `url('${BackgroundImage}') no-repeat center/cover`;
      case 1:
        return `url('${NocontentsBackgroundImage}') no-repeat center/cover`;
      default:
        return `url('${NocontentsBackgroundImage}') no-repeat center/cover`;
    }
  }};
`;

const SignUpStyles = {
  StartButton, SignUpPageContainer,
};

export default SignUpStyles;
