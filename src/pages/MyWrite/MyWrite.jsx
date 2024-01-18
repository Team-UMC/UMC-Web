import React from "react";
//import styled from "styled-components";

import BoardType from "components/MyWriting/BoardType";
import List from "components/MyWriting/List";
import PageNumber from "components/MyWriting/PageNumber";
import Search from "components/MyWriting/Search";
import Title from "components/MyWriting/Title";
import Type from "components/MyWriting/Type";


const MyWrite = () => {
<div>
    <Title />
    <Type />
    <BoardType />
    <List />
    <PageNumber />
    <Search />
</div>

};

export default MyWrite;