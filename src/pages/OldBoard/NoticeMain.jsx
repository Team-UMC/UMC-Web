import React from "react";
import NoticeList from "./NoticeList";
import NoticeTitle from "../components/NoticeTitle";
import NoticeCalendarAdmin from "../components/NoticeCalendarAdmin";

const NoticeMain = () => {
    return (
      <>
        <NoticeTitle />
        <NoticeCalendarAdmin />
        <NoticeList />
      </>
    );
}

export default NoticeMain;