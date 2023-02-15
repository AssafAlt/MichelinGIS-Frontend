import React from "react";

import { useForm } from "react-hook-form";

import { cuisines } from "../../options/cuisines";
import { cities } from "../../options/cities";

const FilterTable = (props) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      stars: null,
      cuisine: null,
      city: null,
    },
  });
  const getAllData = () => {
    reset();
    props.setFilteredRests(props.rests);
  };
  const filterData = (data) => {
    const Rests = props.rests;

    let filteredRests = Rests;

    if (data.stars) {
      filteredRests = filteredRests.filter((rest) => rest.stars === data.stars); //rest.stars === data.stars);
    }

    if (data.cuisine) {
      filteredRests = filteredRests.filter(
        (rest) => rest.cuisine === data.cuisine
      );
    }
    if (data.city) {
      filteredRests = filteredRests.filter((rest) => rest.city === data.city);
    }
    props.setFilteredRests(filteredRests);
  };

  const onClickReset = () => {
    reset();
  };
  const onSubmit = (data) => {
    console.log(data);
    filterData(data);
  };

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:grid-cols-1 sm:justify-center sm:items-center  ">
      <div className=" grid justify-items-end py-2 px-2">
        <button
          onClick={onClickReset}
          className="px-2 py-2 w-50% rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        >
          Reset Filters
        </button>
      </div>

      <div className="mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4 mt-4 "
        >
          <select
            {...register("stars")}
            className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">Stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <select
            {...register("cuisine")}
            className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">Cuisine</option>
            {cuisines.map((cuisine) => (
              <option value={cuisine}>{cuisine}</option>
            ))}
          </select>

          <select
            {...register("city")}
            className="px-4 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">City</option>
            {cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>

          <button
            type="submit"
            className="text-gray-700 hover:bg-slate-200 font-bold py-2 px-4 rounded"
          >
            Filter
          </button>
        </form>
        <button
          className="text-gray-700 hover:bg-slate-200 font-bold py-1 px-6 rounded"
          onClick={getAllData}
        >
          Show All Restaurantes
        </button>
      </div>
    </div>
  );
};

export default FilterTable;
