import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import Modal from "react-modal";
import { saveAs } from "file-saver";
const unAccessKey = import.meta.env.VITE_unAccessKey;

const ModalComponent = ({
  closeModal,
  openModal,
  setIsOpen,
  modalIsOpen,
  image,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      padding: "0px",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleDownload = (dnId) => {
    axios
      .get(
        `https://api.unsplash.com/photos/${dnId}/download?client_id=${unAccessKey}`
      )
      .then((res) => {
        const downloadUrl = res.data.url;
        saveAs(downloadUrl, "image.jpg");

        console.log(res.data);
      });
  };
  console.log(image?.user);

  return (
    <div className="relative rounded-md">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          className="btn bg-slate-50 absolute right-0 top-0 btn-small"
          onClick={closeModal}
        >
          close
        </button>
        <div className="w-[900px] h-[500px]">
          <div className="">
            <div className="">
              <img
                className="object-cover w-[900px] h-[400px]"
                src={image?.urls?.regular}
                alt=""
              />
              <button
                onClick={() => handleDownload(image?.id)}
                className="absolute right-0 top-[350px]  rounded-none rounded-t-md  btn text-white bg-green-400"
              >
                download
              </button>
            </div>
            <div className="flex px-2 my-2 justify-between items-center">
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
              <div>
                <p className="flex gap-2 items-center">
                  <AiOutlineTwitter></AiOutlineTwitter>
                  {image?.user?.twitter_username}
                </p>
                <p className="flex gap-2 items-center">
                  <AiOutlineInstagram></AiOutlineInstagram>{" "}
                  {image?.user?.instagram_username}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FiThumbsUp></FiThumbsUp>
                <p>{image?.likes}</p>
              </div>
            </div>
          </div>
          <div>{}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
