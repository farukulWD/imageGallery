import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import SingleImage from "./SingleImage";
import { SearchContext } from "../../../Context/SearchProvider";

const Gallery = () => {
  const { searchText, setSearchText } = useContext(SearchContext);
  const unAccessKey = import.meta.env.VITE_unAccessKey;
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(
          `https://api.unsplash.com/photos/?client_id=${unAccessKey}&per_page=30`
        )
        .then((res) => {
          return res.data;
        });
      setImages(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(
          `https://api.unsplash.com/search/photos/?client_id=${unAccessKey}&query=${searchText}`
        )
        .then((res) => {
          return res.data;
        });
      console.log(data);
    };

    fetchData();
  }, [searchText]);
  return (
    <div className="my-10 my-container grid lg:grid-cols-4  md:grid-cols-3 gap-4">
      {images.length > 0 &&
        images.map((img) => (
          <SingleImage key={img.id} image={img}></SingleImage>
        ))}
    </div>
  );
};

export default Gallery;
