import React from "react";
import styled from "styled-components";

const CommonTableRowWrapper = styled.tr`
  &:hover {
    background-color: #eceaea;
    cursor: pointer;
  }
`;

const CommonTableRow = ({children}) => {
    return (

        <CommonTableRowWrapper>{children}</CommonTableRowWrapper>

    );
}

export default CommonTableRow;