import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CommonTable from "../components/CommonTable";
import CommonTableRow from "../components/CommonTableRow";
import CommonTableColumn from "../components/CommonTableColumn";
import { noticeList } from "../Data";

const NoticeList = props => {
    const [ dataList, setDataList ] = useState();
    const [ originalList, setOriginalList ] = useState();

    useEffect(() => {
        setDataList(noticeList);
        setOriginalList(noticeList);
    }, [ ]);

    const handlePinClick = (no) => {
      let updatedDataList;
      const pinnedItem = dataList.find(item => item.isPin);

      if (pinnedItem && pinnedItem.no === no) {
        updatedDataList = [...originalList];
      } else {
        const selectedItem = dataList.find(item => item.no === no);
        updatedDataList = [selectedItem, ...dataList.filter(item => item.no !== no)];
      }

      setDataList(updatedDataList)
    }

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
                  <details>
                    <summary>
                      <CommonTableRow key={index}>
                        <CommonTableColumn
                          onClick={() => handlePinClick(item.no)}
                        >
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
                        <CommonTableColumn>
                          <img
                            src={require("../assets/open-arrow.svg").default}
                            alt="펼치기 아이콘"
                          />
                        </CommonTableColumn>
                      </CommonTableRow>
                    </summary>
                    <p>{item.content}</p>
                  </details>
                );
              })
            : ""}
        </CommonTable>
      </>
    );
}

export default NoticeList;