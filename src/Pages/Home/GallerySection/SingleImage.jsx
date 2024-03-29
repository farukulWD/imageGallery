import { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import ModalComponent from "../ModalComponet/ModalComponent";
const unAccessKey = import.meta.env.VITE_unAccessKey;
import axios from "axios";
const SingleImage = ({ image }) => {
  const [initialAPICallMade, setInitialAPICallMade] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [getImage, setGetImage] = useState({});
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (initialAPICallMade) {
      const getData = async () => {
        setImageLoading(true);
        const data = await axios
          .get(
            `https://api.unsplash.com/photos/${image.id}?client_id=${unAccessKey}`
          )
          .then((res) => {
            return res.data;
          });
        setGetImage(data);
        setImageLoading(false);
      };

      getData();
    }
  }, [initialAPICallMade]);

  const openModal = () => {
    setInitialAPICallMade(true);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <ModalComponent
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          setIsOpen={setIsOpen}
          image={getImage}
          imageLoading={imageLoading}
        ></ModalComponent>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              onClick={() => openModal()}
              className="w-full h-72"
              src={image.urls.thumb}
              alt=""
            />
          </figure>
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 justify-between">
                <img
                  className="w-10 h-10 rounded-full"
                  src={image?.user?.profile_image.small}
                  alt=""
                />
                <div>
                  <p className="font-semibold">{image?.user.name}</p>
                  <p>@{image?.user.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FiThumbsUp></FiThumbsUp>

                <p>{image?.likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleImage;
