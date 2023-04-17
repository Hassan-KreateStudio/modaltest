"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const EducationModal = ({ imageSrc, altText }) => {
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [textEducationInputValue1, setEducationTextInputValue1] = useState("");
  const [textEducationInputValue2, setEducationTextInputValue2] = useState("");
  const [textEducationInputValue3, setEducationTextInputValue3] = useState("");
  const [textEducationInputValue4, setEducationTextInputValue4] = useState("");
  const [dateEducationInputValue1, setEducationDateInputValue1] = useState("");
  const [dateEducationInputValue2, setEducationDateInputValue2] = useState("");
  const [showEducationFormSubmitted, setShowEducationFormSubmitted] =
    useState(false);
  const handleOpenEducationModal = () => {
    setShowEducationModal(true);
  };

  const handleCloseEducationModal = () => {
    setShowEducationModal(false);
  };

  const handleEducationTextInput1Change = (event) => {
    setEducationTextInputValue1(event.target.value);
  };

  const handleEducationTextInput2Change = (event) => {
    setEducationTextInputValue2(event.target.value);
  };
  const handleEducationTextInput3Change = (event) => {
    setEducationTextInputValue3(event.target.value);
  };
  const handleEducationTextInput4Change = (event) => {
    setEducationTextInputValue4(event.target.value);
  };

  const handleEducationDateInput1Change = (event) => {
    setEducationDateInputValue1(event.target.value);
  };
  const handleEducationDateInput2Change = (event) => {
    setEducationDateInputValue2(event.target.value);
  };

  const handleEducationFormSubmit = (event) => {
    event.preventDefault();
    setShowEducationFormSubmitted(true);
    setShowEducationModal(false);
  };

  return (
    <div>
      {showEducationFormSubmitted && (
        <div>
          <div className="flex flex-row">
            <h2 className="ml-4 mt-5">Olevel</h2>

            <Image
              src={"/Edit.svg"}
              alt={"Edit"}
              height={24}
              width={24}
              onClick={handleOpenEducationModal}
              className="mr-12 mt-5"
            />
          </div>
          <div class="bg-white rounded-lg px-6 mt-3 grid grid-cols-2 gap-6">
            <div class="flex flex-col mt-3">
              <div class="flex flex-col mb-3">
                <p class="font-medium">Education Input 1:</p>
                <p>{textEducationInputValue1}</p>
              </div>
              <div class="flex flex-col mb-3">
                <p class="font-medium">Education Input 2:</p>
                <p>{textEducationInputValue2}</p>
              </div>
              <div class="flex flex-col mb-3">
                <p class="font-medium">Education Input 3:</p>
                <p>{textEducationInputValue3}</p>
              </div>
              <div class="flex flex-col mb-3">
                <p class="font-medium">Education Input 4:</p>
                <p>{textEducationInputValue4}</p>
              </div>
            </div>
            <div class="flex flex-col mt-3">
              <p class="mb-3">
                Education Date Input 2: {dateEducationInputValue2}
              </p>
            </div>
          </div>
        </div>
      )}

      {!showEducationFormSubmitted && (
        <div onClick={handleOpenEducationModal}>
          <img src={imageSrc} alt={altText} height={188} width={551} />
        </div>
      )}
      <Modal
        isOpen={showEducationModal}
        onRequestClose={handleCloseEducationModal}
        className="bg-white rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/4 lg:w-2/5 xl:w-2/6"
        overlayClassName="fixed top-0 left-0 w-full h-full bg-black opacity-100"
        ariaHideApp={false}
      >
        <div className="flex justify-end mt-4">
          <Image
            height={48}
            width={47}
            src={"/CloseIcon.svg"}
            onClick={handleCloseEducationModal}
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
        <form onSubmit={handleEducationFormSubmit} className="mt-4">
          <div className="mb-4">
            <input
              id="educationInput1"
              type="text"
              value={textEducationInputValue1}
              onChange={handleEducationTextInput1Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder="School/Institution"
            />
          </div>

          <div className="mb-4">
            <input
              id="educationInput2"
              type="text"
              value={textEducationInputValue2}
              onChange={handleEducationTextInput2Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder="Degree/Qualification"
            />
          </div>

          <div className="mb-4">
            <input
              id="educationInput3"
              type="text"
              value={textEducationInputValue3}
              onChange={handleEducationTextInput3Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder="Field of Study"
            />
          </div>

          <div className="mb-4">
            <input
              id="educationInput4"
              type="text"
              value={textEducationInputValue4}
              onChange={handleEducationTextInput4Change}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
              placeholder="GPA/Grade"
            />
          </div>

          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <input
                id="educationDateInput1"
                type="date"
                value={dateEducationInputValue1}
                onChange={handleEducationDateInput1Change}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2 ml-2">
              <input
                id="educationDateInput2"
                type="date"
                value={dateEducationInputValue2}
                onChange={handleEducationDateInput2Change}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <button
            onClick={setShowEducationFormSubmitted}
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

export default EducationModal;
