import React from "react";
import { useNavigate } from "react-router-dom";

import ReviewCard from "./ReviewCard";

const RestCard = ({ props }) => {
  const navigate = useNavigate();

  const getAllReviewsHandler = () => {
    navigate(`/${props.name}`);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200  rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
            #{props.city}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">
            #{props.cuisine}
          </span>
          <h3 className="pt-1 ml-2 font-bold text-sm">Last review</h3>
          {props.reviews[0] ? (
            <ReviewCard props={props.reviews[props.reviews.length - 1]} />
          ) : (
            <p>There are no reviews</p>
          )}
          <button
            onClick={getAllReviewsHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            See all reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
