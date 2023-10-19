import React from "react";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <div className="bg-slate-50">
      <div className="my-container py-64">
        <h1 className="text-xl font-bold text-center mb-6">Login with Login</h1>
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;
