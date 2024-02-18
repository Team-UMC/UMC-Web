import React from 'react';

import 가천대학교 from 'assets/SchoolLogo/가천대학교.svg';
import 가톨릭대학교 from 'assets/SchoolLogo/가톨릭대학교.svg';
import 경기대학교 from 'assets/SchoolLogo/경기대학교.svg';
import 경희대학교 from 'assets/SchoolLogo/경희대학교.svg';
import 광운대학교 from 'assets/SchoolLogo/광운대학교.svg';
import 덕성여자대학교 from 'assets/SchoolLogo/덕성여대.svg';
import 동국대학교 from 'assets/SchoolLogo/동국대학교.svg';
import 동덕여자대학교 from 'assets/SchoolLogo/동덕여대.svg';
import 명지대학교 from 'assets/SchoolLogo/명지대학교.svg';
import 부경대학교 from 'assets/SchoolLogo/부경대학교.svg';
import 상명대학교 from 'assets/SchoolLogo/상명대학교.svg';
import 서경대학교 from 'assets/SchoolLogo/서경대학교.svg';
import 서울여자대학교 from 'assets/SchoolLogo/서울여대.svg';
import 성신여자대학교 from 'assets/SchoolLogo/성신여대.svg';
import 숙명여자대학교 from 'assets/SchoolLogo/숙명여대.svg';
import 숭실대학교 from 'assets/SchoolLogo/숭실대학교.svg';
import 아주대학교 from 'assets/SchoolLogo/아주대학교.svg';
import 울산대학교 from 'assets/SchoolLogo/울산대학교.svg';
import 이화여자대학교 from 'assets/SchoolLogo/이화여대.svg';
import 인하대학교 from 'assets/SchoolLogo/인하대학교.svg';
import 중앙대학교 from 'assets/SchoolLogo/중앙대학교.svg';
import 한국공학대학교 from 'assets/SchoolLogo/한국공학대학교.svg';
import 한국외국어대학교 from 'assets/SchoolLogo/한국외국어대학교.svg';
import 한국항공대학교 from 'assets/SchoolLogo/한국항공대학교.svg';
import 한성대학교 from 'assets/SchoolLogo/한성대학교.svg';
import 한양대학교 from 'assets/SchoolLogo/한양대학교.svg';
import 홍익대학교 from 'assets/SchoolLogo/홍익대학교.svg';

export const FindSchoolImage = (schoolName) => {
  switch (schoolName) {
    case '가천대학교':
      return <img src={가천대학교} />;
    case '가톨릭대학교':
      return <img src={가톨릭대학교} />;
    case '경기대학교':
      return <img src={경기대학교} />;
    case '경희대학교':
      return <img src={경희대학교} />;
    case '광운대학교':
      return <img src={광운대학교} />;
    case '덕성여자대학교':
      return <img src={덕성여자대학교} />;
    case '동국대학교':
      return <img src={동국대학교} />;
    case '동덕여자대학교':
      return <img src={동덕여자대학교} />;
    case '명지대학교':
      return <img src={명지대학교} />;
    case '부경대학교':
      return <img src={부경대학교} />;
    case '상명대학교':
      return <img src={상명대학교} />;
    case '서경대학교':
      return <img src={서경대학교} />;
    case '서울여자대학교':
      return <img src={서울여자대학교} />;
    case '성신여자대학교':
      return <img src={성신여자대학교} />;
    case '숙명여자대학교':
      return <img src={숙명여자대학교} />;
    case '숭실대학교':
      return <img src={숭실대학교} />;
    case '아주대학교':
      return <img src={아주대학교} />;
    case '울산대학교':
      return <img src={울산대학교} />;
    case '이화여자대학교':
      return <img src={이화여자대학교} />;
    case '인하대학교':
      return <img src={인하대학교} />;
    case '중앙대학교':
      return <img src={중앙대학교} />;
    case '한국공학대학교':
      return <img src={한국공학대학교} />;
    case '한국외국어대학교':
      return <img src={한국외국어대학교} />;
    case '한국항공대학교':
      return <img src={한국항공대학교} />;
    case '한성대학교':
      return <img src={한성대학교} />;
    case '한양대학교':
      return <img src={한양대학교} />;
    case '한양대학교에리카':
      return <img src={한양대학교} />;
    case '홍익대학교':
      return <img src={홍익대학교} />;
    default:
      return '#ffffff';
  }
};
