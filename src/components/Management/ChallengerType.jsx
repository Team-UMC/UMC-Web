import React,{useState} from 'react';
import styled from 'styled-components';

const ChallengerTypeContainer = styled.div`
width: 120vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 

border: 1px solid #232A6D;
`;


const TitleContainer = styled.div`
width: 70%;
border-radius: 12px;
font-size: 16px;
font-weight: 500;

border: 1px solid #232A6D;
`;

const SubTitle = styled.div`
font-size: 16px;
font-weight: 500;
color: #4B4B4B;
`;



const ChallengerType = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleDropdownChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
        <ChallengerTypeContainer>
        <TitleContainer>
            운영진 직책
            <SubTitle>학교</SubTitle>
            <SubTitle>중앙</SubTitle>
        </TitleContainer>

        <TitleContainer>
            기수 및 파트
            <label htmlFor="dropdown">Select a generation:</label>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option value="">Select a generation</option>
        <option value="1st">1기</option>
        <option value="2nd">2기</option>
        <option value="3rd">3기</option>
        <option value="4th">4기</option>
        <option value="5th">5기</option>
        <option value="6th">6기</option>
      </select>

      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
        </TitleContainer>

        </ChallengerTypeContainer>
    );
};

export default ChallengerType;