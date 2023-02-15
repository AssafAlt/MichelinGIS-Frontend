import React, { useState } from "react";
import { Popup, Marker } from "react-leaflet";
import RestCard from "../ui/RestCard";
import AddReview from "../reviews/AddReview";

const PointCreator = ({ props }) => {
  const [reviewIsShown, setReviewIsShown] = useState(false);

  const showReviewHandler = () => {
    setReviewIsShown(true);
  };

  const hideReviewHandler = () => {
    setReviewIsShown(false);
  };
  return (
    <Marker position={[props.latitude, props.longitude]}>
      <Popup>
        {reviewIsShown ? (
          <>
            <AddReview restId={props._id} />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={hideReviewHandler}
            >
              Back
            </button>
          </>
        ) : (
          <>
            <RestCard props={props} />
            <button
              onClick={showReviewHandler}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded mt-2 "
            >
              Add a review
            </button>
          </>
        )}
      </Popup>
    </Marker>
  );
};

export default PointCreator;
