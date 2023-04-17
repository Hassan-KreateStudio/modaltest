"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import Link from "next/link";

const InstagramModal = ({ imageSrc, altText, displayText, onSubmit }) => {
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [textInputInstagramValue, setTextInputInstagramValue] = useState("");

  const handleOpenGitModal = () => {
    setShowInstagramModal(true);
  };

  const handleCloseInstagramModal = () => {
    setShowInstagramModal(false);
  };

  const handleInstagramFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(textInputInstagramValue);
    setShowInstagramModal(false);
  };

  const handleInstagramTextInputChange = (event) => {
    setTextInputInstagramValue(event.target.value);
  };

  return (
    <div>
      {textInputInstagramValue && (
        <div>
          <Link href={textInputInstagramValue}>
            <Image
              src={"/Instagram.svg"}
              altText="Github"
              height={49}
              width={49}
            />
          </Link>
        </div>
      )}

      {!textInputInstagramValue && (
        <div onClick={handleOpenGitModal}>
          <img src={imageSrc} alt={altText} height={49} width={49} />
        </div>
      )}
      <Modal
        isOpen={showInstagramModal}
        onRequestClose={handleCloseInstagramModal}
        className="bg-white rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/4 lg:w-2/5 xl:w-2/6"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black opacity-100"
        ariaHideApp={false}
      >
        <div className="flex justify-end mt-4">
          <Image
            height={48}
            width={47}
            src={"/CloseIcon.svg"}
            onClick={handleCloseInstagramModal}
          />
        </div>
        <div className="flex justify-center mb-4 mt-10">
          <h2 className="text-2xl font-bold">Add your github profile URL</h2>
        </div>
        <div className="mx-auto p-6 bg-gray-100 rounded-lg mt-5 text-center">
          <p className="text-lg text-[#755B96]">
            Please input any skills that you have that are relevant to the field
            of work you are interested in.
          </p>
        </div>
        <form onSubmit={handleInstagramFormSubmit} className="mt-4">
          <div className="mx-auto">
            <input
              type="text"
              value={textInputInstagramValue}
              onChange={handleInstagramTextInputChange}
              className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleCloseInstagramModal}
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

export default InstagramModal;
