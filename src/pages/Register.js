import React from "react";

import { registerUser } from "../features/auth/authSlice";
import AuthCard from "../components/ui/AuthCard";

const Register = () => {
  return (
    <AuthCard
      dispatcher={registerUser}
      upOrIn="up"
      alreadyOrNot="Already registered"
      alreadyOrNotPath="/login"
      buttonName="Register"
      createOrLogin="Login"
      successMessage="Registered successfully"
      errorMessage="Register is failed, please try again"
    />
  );
};

export default Register;