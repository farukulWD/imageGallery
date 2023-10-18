import React from "react";
import { FiThumbsUp } from "react-icons/fi";
const SingleImage = ({ image }) => {
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-72" src={image.urls.thumb} alt="" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 justify-between">
              <img
                className="w-10 h-10 rounded-full"
                src={image?.user.profile_image.small}
                alt=""
              />
              <div>
                <p className="font-semibold">{image?.user.name}</p>
                <p>@{image?.user.username}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FiThumbsUp></FiThumbsUp>
              <p>{image?.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
