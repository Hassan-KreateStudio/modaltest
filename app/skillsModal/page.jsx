"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const SkillsModal = ({ imageSrc, altText }) => {
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const [textSkillsInputValue1, setSkillsTextInputValue1] = useState("");
  const [textSkillsInputValue2, setSkillsTextInputValue2] = useState("");
  const [textSkillsInputValue3, setSkillsTextInputValue3] = useState("");

  const [showSkillsFormSubmitted, setShowSkillsFormSubmitted] = useState(false);
  const handleOpenSkillsModal = () => {
    setShowSkillsModal(true);
  };

  const handleCloseSkillsModal = () => {
    setShowSkillsModal(false);
  };

  const handleSkillsTextInput1Change = (event) => {
    setSkillsTextInputValue1(event.target.value);
  };

  const handleSkillsTextInput2Change = (event) => {
    setSkillsTextInputValue2(event.target.value);
  };
  const handleSkillsTextInput3Change = (event) => {
    setSkillsTextInputValue3(event.target.value);
  };

  const handleSkillsFormSubmit = (event) => {
    event.preventDefault();
    setShowSkillsFormSubmitted(true);
    setShowSkillsModal(false);
  };

  return (
    <div>
      {showSkillsFormSubmitted && (
        <div>
          <div class="flex flex-row mt-3 space-x-3">
            <div class="flex flex-col mb-3">
              <span class="inline-block rounded-full py-4 px-8 text-sm font-medium bg-[#6750A4] bg-white border border-purple-500">
                {textSkillsInputValue1}
              </span>
            </div>
            <div class="flex flex-col mb-3">
              <span class="inline-block rounded-full py-4 px-8 text-sm font-medium bg-[#6750A4] bg-white border border-purple-500">
                {textSkillsInputValue2}
              </span>
            </div>
            <div class="flex flex-col mb-3">
              <span class="inline-block rounded-full py-4 px-8 text-sm font-medium bg-[#6750A4] bg-white border border-purple-500">
                {textSkillsInputValue3}
              </span>
            </div>
          </div>
        </div>
      )}

      {!showSkillsFormSubmitted && (
        <div onClick={handleOpenSkillsModal}>
          <img src={imageSrc} alt={altText} height={53} width={202} />
        </div>
      )}
      <Modal
        isOpen={showSkillsModal}
        onRequestClose={handleCloseSkillsModal}
        className="bg-white rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/4 lg:w-2/5 xl:w-2/6"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black opacity-100"
        ariaHideApp={false}
      >
        <div className="flex justify-end mt-4">
          <Image
            height={48}
            width={47}
            src={"/CloseIcon.svg"}
            onClick={handleCloseSkillsModal}
          />
        </div>
        <div className="flex justify-center mb-4 mt-10">
          <h2 className="text-2xl font-bold">Add Skills</h2>
        </div>
        <div className="mx-auto p-6 bg-gray-100 rounded-lg mt-5 text-center">
          <p className="text-lg text-[#755B96]">
            Please input any skills that you have that are relevant to the field
            of work you are interested in.
          </p>
        </div>
        <form onSubmit={handleSkillsFormSubmit} className="mt-4">
          <div className="mb-4">
            <input
              id="educationInput1"
              type="text"
              value={textSkillsInputValue1}
              onChange={handleSkillsTextInput1Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <input
              id="educationInput2"
              type="text"
              value={textSkillsInputValue2}
              onChange={handleSkillsTextInput2Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <input
              id="educationInput3"
              type="text"
              value={textSkillsInputValue3}
              onChange={handleSkillsTextInput3Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder="Field of Study"
            />
          </div>

          <button
            onClick={setShowSkillsFormSubmitted}
            type="submit"
            className="text-white font-bold py-2 px-4 rounded-full bg-[#6750A4] w-full md:w-auto md:py-3 md:px-6"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SkillsModal;
