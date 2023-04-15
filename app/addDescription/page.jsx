"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const AddDescription = ({ imageSrc, altText, displayText, onSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(textInputValue);
    setShowModal(false);
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  return (
    <div>
      {textInputValue && (
        <div>
          <div className="flex flex-row">
            <h2 className="ml-4 mt-5">Description</h2>

            <Image
              src={"/Edit.svg"}
              alt={"Edit"}
              height={24}
              width={24}
              onClick={handleOpenModal}
              className="mr-12 mt-5"
            />
          </div>
          <div className="bg-white rounded-lg px-6 mt-3">
            <p className="text-2xl">{textInputValue}</p>
          </div>
        </div>
      )}

      {!textInputValue && (
        <div onClick={handleOpenModal}>
          <img src={imageSrc} alt={altText} height={188} width={551} />
        </div>
      )}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        className="bg-white rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/4 lg:w-2/5 xl:w-2/6"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black opacity-100"
        ariaHideApp={false}
      >
        <div className="flex justify-end mt-4">
          <Image
            height={48}
            width={47}
            src={"/CloseIcon.svg"}
            onClick={handleCloseModal}
          />
        </div>
        <div className="flex justify-center mb-4 mt-10">
          <h2 className="text-2xl font-bold">Add a one liner</h2>
        </div>
        <div className="mx-auto p-6 bg-gray-100 rounded-lg mt-5 text-center">
          <p className="text-lg text-[#755B96]">
            Please input any skills that you have that are relevant to the field
            of work you are interested in.
          </p>
        </div>
        <form onSubmit={handleFormSubmit} className="mt-4">
          <div className="mx-auto">
            <input
              type="text"
              value={textInputValue}
              onChange={handleTextInputChange}
              className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleCloseModal}
              type="submit"
              className="text-white font-bold py-2 px-4 rounded-full bg-[#6750A4] w-full md:w-auto md:py-3 md:px-6"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDescription;
