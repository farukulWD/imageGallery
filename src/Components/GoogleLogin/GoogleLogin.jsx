import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        // navigate(from);
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Login has been successful",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn w-52  bg-transparent border border-blue-500"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
