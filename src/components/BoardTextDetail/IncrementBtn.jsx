// import React, { useState } from 'react';
// import styled from 'styled-components';
// import LikeBtnImg from 'assets/LikeBtnImg.svg';

// const LikeBtnWrapper = styled.div`
//   text-align: center;
//   margin-top: 20px;
// `;

// const LikeButton = styled.div`
//   width: 30px;
//   height: 30px;
//   background: url(${LikeBtnImg}) no-repeat center center;
//   background-size: contain;


//   &:hover {
//     cursor: pointer;
//   }
// `;

// const LikeCount = styled.p`
//   color: #000C76;
//   margin-top: 10px;
//   font-size: 18px;
// `;

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
//     <LikeBtnWrapper>
//       <LikeCount>{likes.toString()}</LikeCount>
//       <LikeButton onClick={handleLikeClick} />
//     </LikeBtnWrapper>
//   );
// };

// export default LikeBtn;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IncrementButton = styled.div`
  &:hover {
    cursor: pointer;
  }

  ${(props) => props.style} // 외부에서 전달된 스타일 적용
`;

const IncrementBtn = ({ onClick, imageUrl, style }) => {
  return (
    <IncrementButton onClick={onClick} style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'contain', ...style }} />
  );
};

IncrementBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  style: PropTypes.any,
};

export default IncrementBtn;
