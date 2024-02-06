import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import BoardPage from 'pages/BoardPage/BoardPage';

const BoardPageRoute = () => {
  const { boardType, boardPath } = useParams();

  if (!boardType && !boardPath) {
    return <Redirect to="/board/campus/notice" />;
  }

  // 이제 boardType과 boardPath를 사용하여 해당 보드를 렌더링할 수 있습니다.
  // 예를 들어, 데이터를 가져오거나, 특정 컴포넌트를 렌더링하는 등의 작업을 수행할 수 있습니다.
  // 이 예제에서는 BoardPage 컴포넌트를 렌더링합니다.

  return <BoardPage boardType={boardType} boardPath={boardPath} />;
};

export default BoardPageRoute;
