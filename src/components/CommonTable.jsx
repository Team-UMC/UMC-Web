import React from "react";

import "./CommonTable.css";

const CommonTable = ({ children }) => {
    return (
        <table className="common-table">
            <tbody>{children}</tbody>
        </table>
    );
}

export default CommonTable;