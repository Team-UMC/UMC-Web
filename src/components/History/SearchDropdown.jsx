import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Semester = [
  { value: '', name: '기수' },
  { value: 'FIRST', name: '1기' },
  { value: 'SECOND', name: '2기' },
  { value: 'THIRD', name: '3기' },
  { value: 'FOURTH', name: '4기' },
  { value: 'FIFTH', name: '5기' },
];

const Type = [
  { value: '', name: '유형' },
  { value: 'AOS', name: 'AOS' },
  { value: 'IOS', name: 'iOS' },
  { value: 'WEB', name: 'Web' },
];

const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

const SelectBox = styled.select`
  border-radius: 15px;
  padding: 5px;

  border: 1px solid white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchDropdown = ({
  handleSemesterDropdown,
  handleTypeDropdown,
}) => {
  return (
    <Container>
      <SelectBox onChange={handleSemesterDropdown}>
        {Semester.map((option) => (
          <option key={option.name} value={option.value} defaultValue="">
            {option.name}
          </option>
        ))}
      </SelectBox>

      <SelectBox onChange={handleTypeDropdown}>
        {Type.map((option) => (
          <option key={option.name} value={option.value} defaultValue="">
            {option.name}
          </option>
        ))}
      </SelectBox>
    </Container>
  );
};

SearchDropdown.propTypes = {
  handleSemesterDropdown: PropTypes.func.isRequired,
  handleTypeDropdown: PropTypes.func.isRequired,
};

export default SearchDropdown;
