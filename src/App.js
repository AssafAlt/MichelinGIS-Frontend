import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Map = lazy(() => import("./pages/Map"));
const AddPoint = lazy(() => import("./pages/AddPoint"));
const AllReviews = lazy(() => import("./pages/AllReviews"));

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {user && <Route path="/home" element={<Map />} />}

          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/addrest" element={<AddPoint />} />
          <Route path="/allreviews" element={<AllReviews />} />
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
