import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Modal from "react-modal";
import { saveAs } from "file-saver";
import { SearchContext } from "../../../Context/SearchProvider";
import { Vortex } from "react-loader-spinner";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";
const unAccessKey = import.meta.env.VITE_unAccessKey;

const ModalComponent = ({
  closeModal,
  openModal,
  setIsOpen,
  modalIsOpen,
  image,
  imageLoading,
}) => {
  const { searchText, setSearchText, handleSearch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      padding: "",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleDownload = (dnId) => {
    if (!user) {
      Swal.fire({
        title: "Please Login First",
        text: "Are you going to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");

          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
    // axios
    //   .get(
    //     `https://api.unsplash.com/photos/${dnId}/download?client_id=${unAccessKey}`
    //   )
    //   .then((res) => {
    //     const downloadUrl = res.data.url;
    //     saveAs(downloadUrl, "image.jpg");

    //     console.log(res.data);
    //   });
  };
  console.log(image?.tags);

  return (
    <div className="relative  p-2 rounded-md">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {imageLoading ? (
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
          <div className="">
            <div className="">
              <button
                className="btn bg-slate-50 absolute right-0 top-0 btn-small"
                onClick={closeModal}
              >
                close
              </button>
              <div className="">
                <img
                  className="object-cover   w-full  md:w-[900px] md:h-[500px]"
                  src={image?.urls?.regular}
                  alt=""
                />
                <button
                  onClick={() => handleDownload(image?.id)}
                  className="absolute right-0 top-[120px] md:top-[450px]  rounded-none rounded-t-md  btn text-white bg-green-400"
                >
                  download
                </button>
              </div>
              <div className="flex px-5 my-2 justify-between items-center">
                <div className="flex gap-2 justify-between">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={image?.user?.profile_image?.small}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold">{image?.user?.name}</p>
                    <p>@{image?.user?.username}</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  {image?.user?.twitter_username && (
                    <p className="flex gap-2 items-center">
                      <AiOutlineTwitter></AiOutlineTwitter>
                      {image?.user?.twitter_username}
                    </p>
                  )}
                  {image?.user?.instagram_username && (
                    <p className="flex gap-2 items-center">
                      <AiOutlineInstagram></AiOutlineInstagram>{" "}
                      {image?.user?.instagram_username}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <FiThumbsUp></FiThumbsUp>
                  <p>{image?.likes}</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl px-4 my-2 font-bold">Tags</h1>
              <div className="gap px-4 mx-auto pb-3 md:flex gap-2 overflow-hidden ">
                {image?.tags?.slice(0, 5).map((t, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() => {
                        handleSearch(t?.title);
                      }}
                      className="p-1 my-1 bg-slate-400 rounded cursor-pointer"
                    >
                      {t?.title}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ModalComponent;
