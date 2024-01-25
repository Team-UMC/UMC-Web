import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

import CommentList from "./CommentList.jsx";
import MyList from "./MyWritingList.jsx";
import GreatList from "./GreatList.jsx";


const TypeComponent = ({ activeType }) => {
  return (
    <div>
      {activeType.writingButton && <MyList />} {' '}
      {activeType.commentButton && <CommentList />} {' '}
      {activeType.goodButton && <GreatList />} {' '}
    </div>
  );
};

// Define PropTypes for TypeComponent
TypeComponent.propTypes = {
  activeType: PropTypes.shape({
    writingButton: PropTypes.bool,
    commentButton: PropTypes.bool,
    goodButton: PropTypes.bool,
  }).isRequired,
};

export default TypeComponent;
