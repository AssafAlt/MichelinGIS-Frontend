import axios from "axios";

const API_URL = "http://localhost:5000/reviews";

//Add review
const addReview = async ({ reviewerName, review, restId }) => {
  const res = await axios.post(API_URL + "/addreview", {
    reviewerName,
    review,
    restId,
  });

  return res.data;
};

const reviewService = {
  addReview,
};

export default reviewService;
