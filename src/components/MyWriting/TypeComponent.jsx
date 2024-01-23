import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import CommentList from "./CommentList.jsx";

const TypeComponent = ({ activeType }) => {
  return (
    <div>
      {activeType.writingButton && <CommentList />} {' '}
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
