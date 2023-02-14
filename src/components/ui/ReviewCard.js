import React from "react";

const ReviewCard = ({ props }) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2">
            Reviewer: {props.reviewer_name}
          </h5>

          <p className="font-normal text-gray-700 mb-3">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
