import React from "react";

const SingleImage = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img className="w-52 h-52" src={image.urls.thumb} alt="" />
    </div>
  );
};

export default SingleImage;
