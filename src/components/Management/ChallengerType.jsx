import React, { useState } from 'react';
import styled from 'styled-components';

const ChallengerTypeContainer = styled.div`
  width: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #232A6D;
`;

const TitleContainer = styled.div`
  width: 70%;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  margin-top: 16px;
  border: 1px solid #232A6D;
`;

const DropdownBox = styled.select`
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => (props.selected ? '#9EE7FF' : '#EAEAEA')};
  color: ${(props) => (props.selected ? '#fff' : '#999')};
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-right: 2vh;
`;

const DropBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddRemoveButton = styled.button`
  margin-right: 8px;
  cursor: pointer;
`;

const ChallengerType = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedPart, setSelectedPart] = useState('');
  const [additionalDropdowns, setAdditionalDropdowns] = useState([]);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDropdownChangePart = (event) => {
    setSelectedPart(event.target.value);
  };

  const handleAdditionalDropdownChange = (index, event) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns[index].option = event.target.value;
    setAdditionalDropdowns(newDropdowns);
  };

  const handleAdditionalDropdownChangePart = (index, event) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns[index].part = event.target.value;
    setAdditionalDropdowns(newDropdowns);
  };

  const handleAddButtonClick = () => {
    setAdditionalDropdowns([...additionalDropdowns, { option: '', part: '' }]);
  };

  const handleRemoveButtonClick = (index) => {
    const newDropdowns = [...additionalDropdowns];
    newDropdowns.splice(index, 1);
    setAdditionalDropdowns(newDropdowns);
  };

  const renderAdditionalDropdowns = () => {
    return additionalDropdowns.map((dropdown, index) => (
      <DropBoxContainer key={index}>
        <DropdownBox
          value={dropdown.option}
          onChange={(event) => handleAdditionalDropdownChange(index, event)}
          selected={dropdown.option !== ''}
        >
          <option value="" hidden disabled>기수</option>
          <option value="1기">1기</option>
          <option value="2기">2기</option>
          <option value="3기">3기</option>
          <option value="4기">4기</option>
          <option value="5기">5기</option>
          <option value="6기">6기</option>
        </DropdownBox>

        <DropdownBox
          value={dropdown.part}
          onChange={(event) => handleAdditionalDropdownChangePart(index, event)}
          selected={dropdown.part !== ''}
        >
          <option value="" hidden disabled>파트</option>
          <option value="PM">PM</option>
          <option value="Design">Design</option>
          <option value="Spring">Spring</option>
          <option value="Node">Node</option>
          <option value="Web">Web</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </DropdownBox>

        <AddRemoveButton onClick={handleAddButtonClick}>+</AddRemoveButton>
        {additionalDropdowns.length > 0 && (
          <AddRemoveButton onClick={() => handleRemoveButtonClick(index)}>
            {index === 0 ? '-' : ''}
          </AddRemoveButton>
        )}
      </DropBoxContainer>
    ));
  };

  return (
    <ChallengerTypeContainer>
      <TitleContainer>
        기수 및 파트
        <DropBoxContainer>
          <DropdownBox
            value={selectedOption}
            onChange={handleDropdownChange}
            selected={selectedOption !== ''}
          >
            <option value="" hidden disabled>기수</option>
            <option value="1기">1기</option>
            <option value="2기">2기</option>
            <option value="3기">3기</option>
            <option value="4기">4기</option>
            <option value="5기">5기</option>
            <option value="6기">6기</option>
          </DropdownBox>

          <DropdownBox
            value={selectedPart}
            onChange={handleDropdownChangePart}
            selected={selectedPart !== ''}
          >
            <option value="" hidden disabled>파트</option>
            <option value="PM">PM</option>
            <option value="Design">Design</option>
            <option value="Spring">Spring</option>
            <option value="Node">Node</option>
            <option value="Web">Web</option>
            <option value="iOS">iOS</option>
            <option value="Android">Android</option>
          </DropdownBox>

          <AddRemoveButton onClick={handleAddButtonClick}>+</AddRemoveButton>
          {additionalDropdowns.length > 0 && (
            <AddRemoveButton onClick={() => handleRemoveButtonClick(0)}>
              {additionalDropdowns.length === 1 ? '-' : ''}
            </AddRemoveButton>
          )}
        </DropBoxContainer>
        {renderAdditionalDropdowns()}
      </TitleContainer>
    </ChallengerTypeContainer>
  );
};

export default ChallengerType;
