import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 250px;
`;

const SignUpFormWrapper = styled.form`
  color: white;
  height: 20vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 8px;
  margin-bottom: 150px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StepButtonWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.step === 1 ? 'flex-end' : 'space-between')};
`;

const SignUpFormStyle = { Wrapper, SignUpFormWrapper, ButtonsWrapper, StepButtonWrapper };

export default SignUpFormStyle;
