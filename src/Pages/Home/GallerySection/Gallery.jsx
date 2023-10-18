import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleImage from "./SingleImage";

const Gallery = () => {
  const unAccessKey = import.meta.env.VITE_unAccessKey;
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(`https://api.unsplash.com/photos/?client_id=${unAccessKey}`)
        .then((res) => {
          return res.data;
        });
      setImages(data);
    };

    fetchData();
  }, []);
  console.log(images);
  return (
    <div className="my-10 my-container grid lg:grid-cols-5  md:grid-cols-3 gap-2">
      {images.length > 0 &&
        images.map((img) => (
          <SingleImage key={img.id} image={img}></SingleImage>
        ))}
    </div>
  );
};

export default Gallery;
