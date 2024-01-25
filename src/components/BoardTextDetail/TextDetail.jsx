import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ProfileImage } from 'assets/ProfileImg.svg';
import Like from 'assets/Like.svg';
import Comment from 'assets/Comment.svg';
import ViewCount from 'assets/ViewCount.svg';
import MiniHambergerMenu from 'assets/MiniHamberMenu.svg';
// import IncrementCount from 'components/BoardTextDetail/IncrementCount.jsx';
// import IncrementBtn from 'components/BoardTextDetail/IncrementBtn';
// import LikeBtnImg from 'assets/LikeBtnImg.svg';
import {
  AllWrapper,
  ProfileTextControlWrapper,
  MiniHambergerMenuImg,
  ProfileBigWrapper,
  ProfileSmallWrapper,
  NameNickname,
  CohortPart,
  TextTitle,
  TextContent,
  LikeCommentDateWrapper,
  DateWrapper,
  Date,
  LikeCommentViewCountWrapper,
  Wrapper,
} from 'components/BoardTextDetail/TextDetail.style';

// const LikeBtn = () => {
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);

//   const handleLikeClick = () => {
//     const userConfirmed = confirm('이 글에 좋아요를 누르시겠습니까?');

//     if (userConfirmed) {
//       if (!liked) {
//         setLikes(likes + 1);
//         setLiked(true);
//       } else {
//         alert('이미 좋아요를 누른 글입니다.');
//       }
//     }
//   };

//   return (
//     <div>
//       <IncrementBtn
//         onClick={handleLikeClick}
//         imageUrl={LikeBtnImg}
//         style={{
//           width: '30px',
//           height: '30px',
//           backgroundSize: 'contain',
//           '&:hover': {
//             cursor: 'pointer',
//           },
//         }}
//       />
//       <IncrementCount
//         count={likes.toString()}
//         onIncrement={handleLikeClick}
//         style={{ color: '#000C76', fontSize: '18px' }}
//       />
//     </div>
//   );
// };

const TextDetail = ({ NameNicknameText, CohortPartText, commentCount }) => (
  <AllWrapper>
    <ProfileTextControlWrapper>
      <ProfileBigWrapper>
        <ProfileImage alt="프로필 사진" />
        <ProfileSmallWrapper>
          <NameNickname> {NameNicknameText || '리오/이원영'} </NameNickname>
          <CohortPart> {CohortPartText || '5기 Web'} </CohortPart>
        </ProfileSmallWrapper>
      </ProfileBigWrapper>
      <MiniHambergerMenuImg src={MiniHambergerMenu} alt="더보기" />
    </ProfileTextControlWrapper>
    <TextTitle> 그냥 집에 보내주세요ㅠ.ㅠ </TextTitle>
    <TextContent>
      그냥.. 집에 가고 싶어요..집에 보내주세요 엉엉엉 저 진짜 열심히 했어요..
      열심히 했으니까 보내주세요..0마ㅣ람넝ㅁㅇㄴㄹㄴㅇㄹㄴㅇㄹㄹㅇㅇ
    </TextContent>
    <LikeCommentViewCountWrapper>
      <Wrapper>
        <img src={Like} alt="좋아요" />
        {/* <LikeBtn /> */}
      </Wrapper>
      <Wrapper>
        <img src={Comment} alt="댓글" />
        <span style={{ color: '#FFC700' }}>{commentCount}</span>
      </Wrapper>
      <Wrapper>
        <img src={ViewCount} alt="조회수" />
      </Wrapper>
    </LikeCommentViewCountWrapper>
    <LikeCommentDateWrapper>
      <DateWrapper>
        <Date> 2023. 12. 16 </Date>
      </DateWrapper>
    </LikeCommentDateWrapper>
  </AllWrapper>
);

TextDetail.propTypes = {
  ProfileImg: PropTypes.any,
  NameNicknameText: PropTypes.string.isRequired,
  CohortPartText: PropTypes.string.isRequired,
  IncrementCount: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  setCommentCount: PropTypes.func,
};

export {
  TextDetail,
  ProfileBigWrapper,
  ProfileSmallWrapper,
  ProfileTextControlWrapper,
  ProfileImage,
  NameNickname,
  CohortPart,
  MiniHambergerMenuImg,
  TextContent,
  Date,
};
