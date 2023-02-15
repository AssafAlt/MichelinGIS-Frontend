import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/auth/authSlice";

const AuthCard = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError } = useSelector((state) => state.auth);
  const onSubmit = (data) => {
    dispatch(props.dispatcher(data));
  };
  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);
  useEffect(() => {
    if (isError) {
      toast.error(props.errorMessage);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.success(props.successMessage);
      dispatch(reset());
      navigate(props.afterSuccess);
    }
  }, [isSuccess, isError, navigate, dispatch]);
  return (
    <div className="h-[100%]  flex justify-center">
      <div className="py-6 px-8 max-2-sm max-2-lg mt-10 rounded shadow-xl border border-blue-500">
        <form
          className="space-y-6 "
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign {props.upOrIn} to our platform
          </h3>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@email.com"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 :ring-blue-600"
              {...register("username")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 :ring-blue-600"
              {...register("password")}
            />
            <button
              type="submit"
              className="cursor-pointer py-2 px-4 block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold w-full text-center rounded"
            >
              {props.buttonName}
            </button>
          </div>
          <br />
          {props.alreadyOrNot}?{" "}
          <Link
            to={props.alreadyOrNotPath}
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            {props.createOrLogin}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AuthCard;
