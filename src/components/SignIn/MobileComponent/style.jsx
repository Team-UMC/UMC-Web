import styled from 'styled-components';
import BackgroundImage from 'assets/SignIn/Background.svg';

const styles = {
  Background: styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 8% auto auto;
  `,

  Button: styled.a`
    cursor: pointer;
  `,

  LoginButtonImage: styled.img`
    width: 170px;
    height: 40px;
  `,
};

export default styles;
