import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <div className="w-full sm:h-30% shadow p-5 rounded bg-white">
      <div className="flex items-center justify-between mt-4">
        <p className="font-medium">Filters</p>

        <button
          onClick={onClickReset}
          className="px-4 py-2  bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
        >
          Reset Filter
        </button>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"
        >
          <select
            {...register("stars")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">Stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <select
            {...register("cuisine")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">Cuisine</option>
            {cuisines.map((cuisine) => (
              <option value={cuisine}>{cuisine}</option>
            ))}
          </select>

          <select
            {...register("city")}
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          >
            <option value="">City</option>
            {cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
          <button type="submit">Filter</button>
        </form>
        <button onClick={getAllData}>Show All Restaurantes</button>
      </div>
    </div>
  );
};

export default FilterTable;
