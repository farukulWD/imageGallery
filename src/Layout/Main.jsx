import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Main = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar></Navbar>
      <div>
        {navigation.state === "loading" ? (
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        ) : (
          <Outlet></Outlet>
        )}
      </div>

      <Footer></Footer>
    </>
  );
};

export default Main;
