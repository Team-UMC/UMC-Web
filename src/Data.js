const noticeList = [
  {
    no: 1,
    isPin: false,
    title: "첫번째 게시글입니다.",
    content: "첫번째 게시글 내용입니다.",
    author: "diwhoihioahfioaoi",
    date: "2024.01.01",
    isOpen: false,
  },
  {
    no: 2,
    isPin: false,
    title: "두번째 게시글입니다.",
    content: "두번째 게시글 내용입니다.",
    author: "ikwpqo",
    date: "2024.01.02",
    isOpen: false,
  },
  {
    no: 3,
    isPin: false,
    title: "세번째 게시글입니다.",
    content: "세번째 게시글 내용입니다.",
    author: "pqpw",
    date: "2024.01.03",
    isOpen: false,
  },
];

const getNoticeByNo = no => {
    const array = noticeList.filter(x => x.no === no);
    if (array.length === 1) {
        return array[0];
    }
    return null;
}

export {
    noticeList,
    getNoticeByNo,
};