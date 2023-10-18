import React from "react";
import HeroBg from "../../../assets/HeroImage/Herobg.jpg";
import { BiSolidMicrophone } from "react-icons/bi";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl font-bold">
              Download High Quality Images by creators
            </h1>
            <p className="mb-5">
              Over 2.4 million+ stock Images by our talented community
            </p>
            <div class="  px-2">
              <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-[800px]">
                <div class="md:flex">
                  <div class="w-full p-3">
                    <div class="relative">
                      <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                      <input
                        type="text"
                        class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none "
                        name=""
                      />
                      <span class="absolute hover:cursor-pointer top-4 right-5 border-l pl-4">
                        <BiSolidMicrophone></BiSolidMicrophone>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
