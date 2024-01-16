import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpFormWrapper from './SignUpForm.style';

const Button = styled.div`
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100px;
  background-color: ${(props) => (props.selected ? 'white' : 'transparent')};
  color: ${(props) => (props.selected ? 'black' : 'white')};

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Generation = () => {
  const [ids, setIds] = useState([]);

  const options = [
    { id: 1, name: '1기' },
    { id: 2, name: '2기' },
    { id: 3, name: '3기' },
    { id: 4, name: '4기' },
    { id: 5, name: '5기' },
    { id: 6, name: '6기' },
  ];

  const handleButtonClick = (data) => {
    setIds((prevState) => {
      const updatedOptions = prevState.includes(data.id)
        ? prevState.filter((option) => option !== data.id) // 삭제
        : [...prevState, data.id]; // 추가

      return {
        ...prevState,
        updatedOptions,
      };
    });
  };

  return (
    <SignUpFormWrapper>
      <h3> 기수를 선택해주세요 </h3>
      <div>
        {options.map((option) => (
          <Button
            key={option.id}
            text={option.name}
            type={ids.includes(option.id) ? "positive_dark" : ""}
            onClick={() => handleButtonClick(option)}
          />
        ))}
      </div>
    </SignUpFormWrapper>
  );
};

export default Generation;
