import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CommonTable from "../components/CommonTable";
import CommonTableRow from "../components/CommonTableRow";
import CommonTableColumn from "../components/CommonTableColumn";
import { noticeList } from "../Data";
import styled from "styled-components";

const PinButton = styled.div`
  width: 100%;
  height: 100%;
  border: none;
`;

const NoticeList = props => {
  const [ dataList, setDataList ] = useState();

  useEffect(() => {
      setDataList(noticeList);
  }, [ ]);

  const togglePin = (no) => {
    setDataList(prevDataList =>
      prevDataList.map(data =>
        data.no === no ? { ...data, isPin: !data.isPin } : data
      ).sort((a, b) => (b.isPin - a.isPin) || (a.no - b.no))
    );
  };

  return (
    <>
      <CommonTable
        headersName={[
          "고정핀",
          "제목",
          "작성자",
          "등록날짜",
          "펼치기/접기",
        ]}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <PinButton onClick={() => togglePin(item.no)}>
                      {item.isPin ? <img src='../assets/pin.svg' alt="고정핀 on" /> : <img src='../assets/nopin.svg' alt="고정핀 off" />}
                    </PinButton>
                  </CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/noticeView/${item.no}`}>
                      {item.title}
                    </Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.author}</CommonTableColumn>
                  <CommonTableColumn>{item.date}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
}

export default NoticeList;