import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CommonTable from "../components/CommonTable";
import CommonTableRow from "../components/CommonTableRow";
import CommonTableColumn from "../components/CommonTableColumn";
import { noticeList } from "../Data";

const NoticeList = props => {
  const [ dataList, setDataList ] = useState();
  const [ activeIndex, setActiveIndex ] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
      setDataList(noticeList);
  }, [ ]);

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
                <CommonTableRow key={index} onClick={() => handleToggle(index)}>
                  <CommonTableColumn>
                    {item.isPin ? (
                      <img
                        src={require("../assets/pin.svg").default}
                        alt="고정핀 아이콘on"
                      />
                    ) : (
                      <img
                        src={require("../assets/nopin.svg").default}
                        alt="고정핀 아이콘off"
                      />
                    )}
                  </CommonTableColumn>
                  <CommonTableColumn>
                    <Link to={`/noticeView/${item.no}`}>
                      {item.title}
                    </Link>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.author}</CommonTableColumn>
                  <CommonTableColumn>{item.date}</CommonTableColumn>
                  {activeIndex === index && (
                    <CommonTableColumn>{item.content}</CommonTableColumn>
                  )}
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
}

export default NoticeList;