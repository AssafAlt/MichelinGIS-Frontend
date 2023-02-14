import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AllReviews = () => {
  const [reviews, setReviews] = useState();
  const params = useParams();
  const splittedName = params.restName?.replace("20%", " ");

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.post(
        "http://localhost:5000/reviews/allreviews",
        splittedName
      );
      await setReviews(response.data);
    };
    fetchReviews();
  }, []);

  return (
    <div>
      <h1>{splittedName}</h1>
      <div>
        {reviews.map((review) => (
          <p>review.reviewer_name</p>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
