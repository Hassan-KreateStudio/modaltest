"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const AddEducation = () => {
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
          <div className="flex flex-row ">
            <h2 className="ml-4 mt-5">Education</h2>
            <div className="flex flex-row ml-auto">
              <Image
                src={"/EducationAdd.svg"}
                alt={"Add project"}
                height={54}
                width={218}
                onClick={handleOpenEducationModal}
              />
              <Image
                src={"/Edit.svg"}
                alt={"Edit"}
                height={24}
                width={24}
                onClick={handleOpenEducationModal}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg px-6 mt-3">
            <div className="flex justify-center mb-4 mt-2 flex-row justify-between">
              <div className=" flex flex-col ">
                <p className="text-center pb-2">Institution</p>
                <p>{textEducationInputValue1}</p>
              </div>
              <div className=" flex flex-col">
                <p className="text-center pb-2">Level</p>
                <p>{textEducationInputValue2}</p>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className=" flex flex-col">
                <p className="">Course</p>
                <p>{textEducationInputValue3}</p>
              </div>
              <div className=" mt-5">
                <div className=" flex flex-col">
                  <p className="">Years</p>
                  <p>
                    {dateEducationInputValue1} to {dateEducationInputValue2}
                  </p>
                </div>
              </div>
              <div className=" flex flex-col">
                <p className="">Grade</p>
                <p>{textEducationInputValue4}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showEducationFormSubmitted && (
        <div>
          <Image
            src={"/AddEducation.svg"}
            altText="Education"
            height={313}
            width={554}
            onClick={handleOpenEducationModal}
          />
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
              <h2 className="text-2xl font-bold">Add Education</h2>
            </div>
            <div class="flex justify-center items-center">
              <form onSubmit={handleEducationFormSubmit} className="mt-4">
                <div className="mx-auto">
                  <input
                    type="text"
                    value={textEducationInputValue1}
                    onChange={handleEducationTextInput1Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                    placeholder="Institution"
                    required
                  />
                </div>
                <div className="mx-auto">
                  <input
                    type="text"
                    value={textEducationInputValue2}
                    onChange={handleEducationTextInput2Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                    placeholder="Level"
                    required
                  />
                </div>
                <div className="mx-auto">
                  <input
                    type="text"
                    value={textEducationInputValue3}
                    onChange={handleEducationTextInput3Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                    placeholder="Course"
                    required
                  />
                </div>
                <div className="mx-auto">
                  <input
                    type="text"
                    value={textEducationInputValue4}
                    onChange={handleEducationTextInput4Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                    placeholder="Grade"
                    required
                  />
                </div>
                <div className="mx-auto">
                  <label
                    htmlFor="input-field-4"
                    className="block text-center mb-2"
                  >
                    From
                  </label>
                  <input
                    type="date"
                    value={dateEducationInputValue1}
                    onChange={handleEducationDateInput1Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3"
                    placeholder="Input field 3"
                    required
                  />
                </div>
                <div className="mx-auto">
                  <label
                    htmlFor="input-field-4"
                    className="block text-center mb-2"
                  >
                    To
                  </label>
                  <input
                    type="date"
                    value={dateEducationInputValue2}
                    onChange={handleEducationDateInput2Change}
                    className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3"
                    placeholder="Input field 3"
                    required
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleEducationFormSubmit}
                    type="submit"
                    className="text-white font-bold py-2 px-4 rounded-full bg-[#6750A4] w-full md:w-auto md:py-3 md:px-6"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default AddEducation;
