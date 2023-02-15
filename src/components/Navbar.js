import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await dispatch(logout());
    setIsAdmin(false);
    navigate("/");
  };
  useEffect(() => {
    if (user) {
      if (user.user === "admin@admin.com") {
        setIsAdmin(true);
      }
    }
  }, [dispatch, user]);

  return (
    <nav>
      <div className="">
        <div className="flex justify-between h-16 px-5 shadow items-center">
          <div className="flex items-center space-x-4">
            <img style={{ width: "50px" }} src="/gis_logo.png" alt="" />
            <h1 className="text-xl lg:text-2xl ml-8 font-bold cursor-pointer">
              MichelinGIS
            </h1>
          </div>
          <div className="flex space-x-4 items-center">
            {isAdmin && (
              <>
                <Link to="/addrest" className="text-gray-800 text-sm">
                  ADD RESTAURANT
                </Link>
              </>
            )}
            {user && (
              <>
                <Link to="/home" className="text-gray-800 text-sm">
                  MAP
                </Link>
                <button
                  onClick={logOutHandler}
                  className="bg-blue-500 px-4 py-2 rounded text-white
                  hover:bg-blue-600 text-sm"
                >
                  LOGOUT
                </button>
              </>
            )}

            {!user && (
              <>
                {" "}
                <Link to="/" className="text-gray-800 text-sm">
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 text-sm"
                >
                  REGISTER
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
