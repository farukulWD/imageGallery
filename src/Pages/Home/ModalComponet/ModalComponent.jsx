import React from "react";
import Modal from "react-modal";

const ModalComponent = ({
  closeModal,
  openModal,
  setIsOpen,
  modalIsOpen,
  imageId,
}) => {
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
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="btn btn-small" onClick={closeModal}>
          close
        </button>
        <div>This is beautiful modal</div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
