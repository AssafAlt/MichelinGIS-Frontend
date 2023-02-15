import React from "react";
import { useNavigate } from "react-router-dom";

import ReviewCard from "./ReviewCard";

const RestCard = ({ props }) => {
  const navigate = useNavigate();

  const getAllReviewsHandler = () => {
    navigate("/allreviews", { state: { id: props._id } });
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>

        <div className="">
          <div className="mb-2">
            <span className="w-100% font-semibold text-sm text-gray-700 mr-2">
              Location: <span className="text-blue-500">{props.city}</span>
            </span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700 text-sm mr-2">
              Cuisine: <span className="text-blue-500"> {props.cuisine} </span>
            </span>
          </div>
          <h3 className="pt-1 ml-2 font-bold text-sm">Last review</h3>
          {props.reviews[0] ? (
            <ReviewCard props={props.reviews[props.reviews.length - 1]} />
          ) : (
            <p>There are no reviews</p>
          )}
          <button
            onClick={getAllReviewsHandler}
            className="text-gray-700 hover:bg-slate-200 font-bold py-2 px-4 rounded"
          >
            See all reviews
          </button>
          <div className="mt-2 mb-1">
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className=" hover:text-black"
            >
              To Restaurant Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
