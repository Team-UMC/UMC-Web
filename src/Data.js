// 대충 데이터들 모음 (여기에 JSON 서버 생기면 구현하면 될 듯...)
let createData = (ispinned, title, author, date, views, content) => {
  return {
    ispinned,
    title,
    author,
    date,
    views,
    content,
  };
};

let ROWS_DATA = [
  createData(
    false,
    'ㅑㅓ랴ㅐ재래ㅑㅁㄹㅈㄹㅈ',
    '작성자1',
    '2021.10.01',
    100,
    '내용1',
  ),
  createData(false, '공지공지공공지', '작성자2', '2021.10.02', 200, '내용2'),
  createData(false, '야야저래ㅑㅈㄹ', '작성자3', '2021.10.03', 300, '내용3'),
  createData(
    false,
    '이제야 틀이 완성됬다에베벱ㅂ베벱ㅂ',
    '작성자4',
    '2021-10-04',
    400,
    '내용4',
  ),
  createData(true, '뉴뉴난ㄴ내', '작성자5', '2021.10.05', 500, '내용5'),
  createData(false, '힘들어...', '작성자6', '2021.10.06', 600, '내용6'),
  createData(true, '살려줘...', '작성자7', '2021.10.07', 700, '내용7'),
  createData(false, '가나다라마바사', '작성자8', '2021.10.08', 800, '내용8'),
  createData(false, '공지입다', '작성자9', '2021.10.09', 900, '내용9'),
  createData(
    false,
    'ㅡ애버ㅡ재ㅔ러ㅐㅔㅈ',
    '작성자10',
    '2021.10.10',
    1000,
    '내용10',
  ),
  createData(true, 'ㅡㅏㅇ9394914', '작성자11', '2021.10.11', 1100, '내용11'),
  createData(false, 'test', '작성자12', '2021.10.12', 1200, '내용12'),
  createData(false, '낄낄낄', '작성자13', '2021.10.13', 1300, '내용13'),
  createData(false, '안녕?', '작성자14', '2021.10.14', 1400, '내용14'),
  createData(false, '제목15', '작성자15', '2021.10.15', 1500, '내용15'),
];

export { ROWS_DATA };
