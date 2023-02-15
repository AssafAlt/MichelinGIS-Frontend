import React from "react";

import { login } from "../features/auth/authSlice";
import AuthCard from "../components/ui/AuthCard";

const Login = () => {
  return (
    <AuthCard
      dispatcher={login}
      upOrIn="in"
      alreadyOrNot="Not registered"
      alreadyOrNotPath="/register"
      buttonName="Login"
      createOrLogin="Create account"
      successMessage="Login successfully"
      afterSuccess="/home"
      errorMessage="Login is failed, please try again"
    />
  );
};

export default Login;
