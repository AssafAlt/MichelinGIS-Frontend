import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addReview, reset } from "../../features/review/reviewSlice";
const AddReview = (props) => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      reviewerName: user.user,
      restId: props.restId,
      review: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    dispatch(addReview(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to add the review, please try again");
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success("Review added successfully");
      dispatch(reset());
      navigate("/home");
    }
  }, [isSuccess, isError, navigate, dispatch]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="mb-1 tracking-wide px-4 py-4">
        <div className="border-b -mx-8 px-8 pb-3">
          <div className="flex items-center mt-1"></div>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <label
              htmlFor="review"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your review
            </label>
            <textarea
              id="review"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your review..."
              {...register("review")}
            ></textarea>

            <button
              type="submit"
              className="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
