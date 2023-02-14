import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addRest } from "../features/points/pointSlice";
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

  const onSubmit = (data) => {
    dispatch(addRest(data));
  };
  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <div className="py-6 px-8 h-[40%] w-[50%] mt-20 bg-white rounded shadow-xl">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Add a Restaurant
          </h3>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="restaurant's name"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              {...register("name")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Latitude:</label>
            <input
              type="text"
              name="latitude"
              placeholder="xx.xxxxxx"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              {...register("latitude")}
            />
            <div className="mb-6">
              <label className="block text-gray-800 font-bold">
                Longitude:
              </label>
              <input
                type="text"
                name="longitude"
                placeholder="xx.xxxxxx"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                {...register("longitude")}
              />
            </div>
            <div className="mb-6">
              <select
                name="city"
                placeholder="user@email.com"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                {...register("city")}
              >
                <option value="">City</option>
                {cities.map((city) => (
                  <option value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <select
                name="region"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                {...register("region")}
              >
                <option value="">Country</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ireland">Ireland</option>
              </select>
            </div>

            <div className="mb-6">
              <select
                name="cuisine"
                placeholder="user@email.com"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                {...register("cuisine")}
              >
                <option value="">Cuisine</option>
                {cuisines.map((cuisine) => (
                  <option value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 font-bold">
                Restaurant Website:
              </label>
              <input
                type="text"
                name="url"
                id="url"
                placeholder="www.restaurantwebsite.com"
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                {...register("url")}
              />
            </div>
            <div className="mb-6">
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

            <button
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
            ></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPoint;
