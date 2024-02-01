import gallery1 from 'assets/gallery/gallerylist/gallery01.png';
import gallery2 from 'assets/gallery/gallerylist/gallery02.png';
import gallery3 from 'assets/gallery/gallerylist/gallery03.png';
import gallery4 from 'assets/gallery/gallerylist/gallery04.png';
import gallery5 from 'assets/gallery/gallerylist/gallery05.png';
import gallery6 from 'assets/gallery/gallerylist/gallery06.png';

import profile1 from 'assets/gallery/galleryprofile/profile1.png';
import profile2 from 'assets/gallery/galleryprofile/profile2.png';
import profile3 from 'assets/gallery/galleryprofile/profile3.jpg';
import profile4 from 'assets/gallery/galleryprofile/profile4.jpg';

const GALLERY_DATAS = [
  {
    id: 24,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '1분 전',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 23,
    title: 'umc 해커톤',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '5시간 전',
    src: [gallery2, gallery5],
    alt: 'umc-해커톤',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 22,
    title: '단체 야구 관람',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '6시간 전',
    src: [gallery3, gallery6],
    alt: '단체 야구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 21,
    title: '새내기 캠퍼스 투어',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.12.18',
    src: [gallery4, gallery2, gallery5],
    alt: '새내기 캠퍼스 투어',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 20,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '2023.11.14',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 19,
    title: '학교 사진',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '2023.11.14',
    src: [gallery4, gallery2],
    alt: '학교 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 18,
    title: '12차 회의 사진',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '2023.11.14',
    src: [gallery5, gallery2],
    alt: '12차 회의 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 17,
    title: '단체 축구 관람',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.11.14',
    src: [gallery6, gallery3],
    alt: '단체 축구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 16,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '1분 전',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 15,
    title: 'umc 해커톤',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '5시간 전',
    src: [gallery2, gallery5],
    alt: 'umc-해커톤',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 14,
    title: '단체 야구 관람',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '6시간 전',
    src: [gallery3, gallery6],
    alt: '단체 야구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 13,
    title: '새내기 캠퍼스 투어',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.12.18',
    src: [gallery4, gallery2, gallery5],
    alt: '새내기 캠퍼스 투어',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 12,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '2023.11.14',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 11,
    title: '학교 사진',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '2023.11.14',
    src: [gallery4, gallery2],
    alt: '학교 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 10,
    title: '12차 회의 사진',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '2023.11.14',
    src: [gallery5, gallery2],
    alt: '12차 회의 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 9,
    title: '단체 축구 관람',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.11.14',
    src: [gallery6, gallery3],
    alt: '단체 축구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 8,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '1분 전',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 7,
    title: 'umc 해커톤',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '5시간 전',
    src: [gallery2, gallery5],
    alt: 'umc-해커톤',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 6,
    title: '단체 야구 관람',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '6시간 전',
    src: [gallery3, gallery6],
    alt: '단체 야구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 5,
    title: '새내기 캠퍼스 투어',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.12.18',
    src: [gallery4, gallery2, gallery5],
    alt: '새내기 캠퍼스 투어',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 4,
    title: '2024 졸업식',
    author: {
      name: '작성자1',
      profile: profile1,
      position: '인하대 회장',
    },
    time: '2023.11.14',
    src: [gallery1, gallery2, gallery6],
    alt: '2024-졸업식',
    view: 182,
    count: 3,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 3,
    title: '학교 사진',
    author: {
      name: '작성자2',
      profile: profile2,
      position: '5기/WEB',
    },
    time: '2023.11.14',
    src: [gallery4, gallery2],
    alt: '학교 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 2,
    title: '12차 회의 사진',
    author: {
      name: '작성자3',
      profile: profile3,
      position: '5기/Design',
    },
    time: '2023.11.14',
    src: [gallery5, gallery2],
    alt: '12차 회의 사진',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
  {
    id: 1,
    title: '단체 축구 관람',
    author: {
      name: '작성자4',
      profile: profile4,
      position: '5기/Server',
    },
    time: '2023.11.14',
    src: [gallery6, gallery3],
    alt: '단체 축구 관람',
    view: 182,
    count: 2,
    content:
      '여러분 함께해주셔서 감사합니다!! 덕분에 너무 즐거웠어요~!! 아래는 어제 찍은 사진들입니다!',
  },
];

export { GALLERY_DATAS };
