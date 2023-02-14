import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(() => {}, [dispatch, user]);

  return (
    <nav>
      <div className="">
        <div className="flex justify-between h-16 px-10 shadow items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
              MichelinGIS
            </h1>
          </div>
          <div className="flex space-x-4 items-center">
            {!user ? (
              <>
                <Link to="/login" className="text-gray-800 text-sm">
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                >
                  REGISTER
                </Link>
              </>
            ) : (
              <button
                onClick={logOutHandler}
                className="bg-indigo-600 px-4 py-2 rounded text-white
                  hover:bg-indigo-500 text-sm"
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;