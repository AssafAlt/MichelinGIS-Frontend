import axios from "axios";

const API_URL = "http://localhost:5000/addrest/";

//Add New Restaurant
const addRest = async ({
  name,
  latitude,
  longitude,
  city,
  region,
  cuisine,
  url,
  stars,
}) => {
  const res = await axios.post(API_URL, {
    name,
    latitude,
    longitude,
    city,
    region,
    cuisine,
    url,
    stars,
  });

  return res.data;
};

const pointService = {
  addRest,
};

export default pointService;
