import React from "react";
import styled from "styled-components";

const CommonTableColumWrapper = styled.td`
  padding: 10px 5px;
`;

const CommonTableColumn = (children) => {
    return (
        <CommonTableColumWrapper>
            {children}
        </CommonTableColumWrapper>
    );
}

export default CommonTableColumn;