import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addRest, reset } from "../features/points/pointSlice";
import { cuisines } from "../options/cuisines";
import { cities } from "../options/cities";

const AddPoint = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      latitude: "",
      longitude: "",
      city: "",
      region: "",
      cuisine: "",
      url: "",
      stars: "",
    },
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isSuccess, isError } = useSelector((state) => state.point);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to add restaurant, please try again");
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success("Restaurant added successfully");
      dispatch(reset());
      navigate("/home");
    }
  }, [isSuccess, isError, navigate, dispatch]);

  const onSubmit = (data) => {
    dispatch(addRest(data));
  };
  return (
    <div className="h-full flex justify-center">
      <div className="py-6 px-8 h-[95%] w-[60%] mt-1 bg-white rounded shadow-xl">
        <form
          className="space-y-2"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add a Restaurant
          </h3>
          <div className="mt-2">
            <label className="block text-gray-800 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="restaurant's name"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("name")}
            />
          </div>
          <div className="">
            <label className="block text-gray-800 font-bold">Latitude:</label>
            <input
              type="text"
              name="latitude"
              placeholder="xx.xxxxxx"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("latitude")}
            />
          </div>
          <div className="">
            <label className="block text-gray-800 font-bold">Longitude:</label>
            <input
              type="text"
              name="longitude"
              placeholder="xx.xxxxxx"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("longitude")}
            />
          </div>
          <div className="">
            <select
              name="city"
              placeholder="user@email.com"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("city")}
            >
              <option value="">City</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="">
            <select
              name="region"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("region")}
            >
              <option value="">Country</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ireland">Ireland</option>
            </select>
          </div>

          <div className="">
            <select
              name="cuisine"
              placeholder="user@email.com"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("cuisine")}
            >
              <option value="">Cuisine</option>
              {cuisines.map((cuisine) => (
                <option value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="block text-gray-800 font-bold">
              Restaurant Website:
            </label>
            <input
              type="text"
              name="url"
              id="url"
              placeholder="www.restaurantwebsite.com"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "
              {...register("url")}
            />
          </div>
          <div className="mb-2">
            <select
              {...register("stars")}
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="">Stars</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold w-25% text-center rounded"
            >
              Add Resturant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoint;
