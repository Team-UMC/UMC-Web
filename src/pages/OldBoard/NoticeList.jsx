import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonTable from '../components/CommonTable';
import CommonTableRow from '../components/CommonTableRow';
import CommonTableColumn from '../components/CommonTableColumn';
import { noticeList } from '../Data';
import styled, { keyframes } from 'styled-components';

import pin from '../assets/pin.svg';
import nopin from '../assets/nopin.svg';
import openArrow from '../assets/open-arrow.svg';

const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const PinButton = styled.div`
  width: 100%;
  height: 100%;
  border: none;

  &:hover,
  &:active {
    animation: ${clickAnimation} 0.5s ease;
  }
`;

const TitleTextAlign = styled.div`
  text-align: left;
`;

const NoticeList = () => {
  const [dataList, setDataList] = useState();

  useEffect(() => {
    setDataList(noticeList);
  }, []);

  const togglePin = (no) => {
    setDataList((prevDataList) =>
      prevDataList
        .map((data) =>
          data.no === no ? { ...data, isPin: !data.isPin } : data,
        )
        .sort((a, b) => b.isPin - a.isPin || a.no - b.no),
    );
  };

  return (
    <>
      <CommonTable
        headersName={['고정핀', '제목', '작성자', '등록날짜', '펼치기/접기']}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
                <>
                  <CommonTableRow key={index}>
                    <CommonTableColumn>
                      <PinButton
                        onClick={() => {
                          togglePin(item.no);
                        }}
                      >
                        {item.isPin ? (
                          <img src={pin} alt="고정핀 on" />
                        ) : (
                          <img src={nopin} alt="고정핀 off" />
                        )}
                      </PinButton>
                    </CommonTableColumn>
                    <CommonTableColumn>
                      <TitleTextAlign>
                        <Link to={`/noticeView/${item.no}`}>{item.title}</Link>
                      </TitleTextAlign>
                    </CommonTableColumn>
                    <CommonTableColumn>{item.author}</CommonTableColumn>
                    <CommonTableColumn>{item.date}</CommonTableColumn>
                    <CommonTableColumn>
                      <img src={openArrow} alt="펼치기/접기" />
                    </CommonTableColumn>
                  </CommonTableRow>
                </>
              );
            })
          : ''}
      </CommonTable>
    </>
  );
};

export default NoticeList;
