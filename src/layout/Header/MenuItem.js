const HomeMenuItems = [
    { title: '투두' },
    { title: 'TIL' },
    { title: '깃허브' },
    {
      title: '마스코트 키우기',
      items: ['대학별 랭킹', '나의 기여도'],
    },
  ];
  
  const BoardMenuItems = [
    {
      title: '학교',
      items: [
        '공지사항',
        '자유게시판',
        '프로젝트 매칭 게시판',
        '이전 기수 게시판',
        '워크북 게시판',
        '건의함',
      ],
    },
    {
      title: '지부',
      items: ['공지사항', '자유게시판', '이전 기수 게시판', '건의함'],
    },
    {
      title: '연합',
      items: ['공지사항', '자유게시판', '이전 기수 게시판', '건의함'],
    },
  ];
  
  const HistoryMenuItems = [
    { title: '프로젝트', items: ['전체', '핫프로젝트', '웹', '앱'] },
  ];
  
  const GalleryMenuItems = [
    { title: '사진첩', items: ['뭐가 들어갈까요', '이제 그만'] },
  ];
  
  export { HomeMenuItems, BoardMenuItems, HistoryMenuItems, GalleryMenuItems };
  