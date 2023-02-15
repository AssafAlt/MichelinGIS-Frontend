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
  const { isSuccess, isError } = useSelector((state) => state.review);

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
    }
  }, [isSuccess, isError, navigate, dispatch]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center">
      <div className="px-6 py-4">
        <div className="border-b -mx-8 px-8 pb-3">
          <div className="flex items-center mt-1"></div>
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <div className="font-bold max-w-lg text-xl mb-2">Your review</div>

            <textarea
              id="review"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your review..."
              {...register("review")}
            ></textarea>

            <button
              type="submit"
              className="text-grey-700 hover:bg-slate-200 font-bold py-2 px-4 rounded text-center"
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
