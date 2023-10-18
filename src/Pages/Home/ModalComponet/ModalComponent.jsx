import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
const unAccessKey = import.meta.env.VITE_unAccessKey;

const ModalComponent = ({
  closeModal,
  openModal,
  setIsOpen,
  modalIsOpen,
  imageId,
}) => {
  const [image, setImage] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/${imageId}?client_id=${unAccessKey}`
      )
      .then((res) => {
        setImage(res.data);
      });
  }, []);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn btn-small" onClick={closeModal}>
          close
        </button>
        <div>
          <img className="w-[500px] h-[500px]" src={image?.urls?.full} alt="" />
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
