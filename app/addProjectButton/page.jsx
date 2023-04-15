import React, { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

const ProjectButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [textInputValue1, setTextInputValue1] = useState("");
  const [textInputValue2, setTextInputValue2] = useState("");
  const [textInputValue3, setTextInputValue3] = useState("");
  const [dateInputValue1, setDateInputValue1] = useState("");
  const [dateInputValue2, setDateInputValue2] = useState("");
  const [showFormSubmitted, setShowFormSubmitted] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTextInput1Change = (event) => {
    setTextInputValue1(event.target.value);
  };

  const handleTextInput2Change = (event) => {
    setTextInputValue2(event.target.value);
  };
  const handleTextInput3Change = (event) => {
    setTextInputValue3(event.target.value);
  };

  const handleDateInput1Change = (event) => {
    setDateInputValue1(event.target.value);
  };

  const handleDateInput2Change = (event) => {
    setDateInputValue2(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowFormSubmitted(true);
  };

  return (
    <div>
      {showFormSubmitted && (
        <div>
          <div className="flex flex-row ">
            <h2 className="ml-4 mt-5">Projects</h2>
            <div className="flex flex-row ml-auto">
              <Image
                src={"/ProjectAdd.svg"}
                alt="Add pproject"
                height={54}
                width={218}
              />
              <Image
                src={"/Edit.svg"}
                alt={"Edit"}
                height={24}
                width={24}
                onClick={handleOpenModal}
              />
            </div>
          </div>
          <div className="bg-white rounded-lg px-6 mt-3">
            <div className="flex justify-center mb-4 mt-2 flex-row justify-between">
              <div className=" flex flex-col ">
                <p className="text-center pb-2">Project Name </p>
                <p>{textInputValue1}</p>
              </div>
              <div className=" flex flex-col">
                <p className="text-center pb-2">Project Role </p>
                <p>{textInputValue2}</p>
              </div>
              <div className=" flex flex-col">
                <p className="text-center pb-2">Project Year </p>
                <p>
                  {dateInputValue1} to {dateInputValue2}
                </p>
              </div>
            </div>
            <div className=" mt-5">
              <div className=" flex flex-col">
                <p className="">Project Description </p>
                <p>{textInputValue3}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showFormSubmitted && (
        <div onClick={handleOpenModal}>
          <img
            src={"/AddProjects.svg"}
            alt={"Add Projects"}
            height={188}
            width={551}
          />
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
          <h2 className="text-2xl font-bold">Add Projects</h2>
        </div>
        <div class="flex justify-center items-center">
          <form onSubmit={handleFormSubmit} className="mt-4">
            <div className="mx-auto">
              <input
                type="text"
                value={textInputValue1}
                onChange={handleTextInput1Change}
                className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                placeholder="Project Name"
                required
              />
            </div>
            <div className="mx-auto">
              <input
                type="text"
                value={textInputValue2}
                onChange={handleTextInput2Change}
                className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                placeholder="Project Role"
                required
              />
            </div>
            <div className="mx-auto">
              <input
                type="text"
                value={textInputValue3}
                onChange={handleTextInput3Change}
                className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3 xl:w-full "
                placeholder="Project Description"
                required
              />
            </div>
            <div className="mx-auto">
              <label htmlFor="input-field-4" className="block text-center mb-2">
                Start of project
              </label>
              <input
                type="date"
                value={dateInputValue1}
                onChange={handleDateInput1Change}
                className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3"
                placeholder="Input field 3"
                required
              />
            </div>
            <div className="mx-auto">
              <label htmlFor="input-field-4" className="block text-center mb-2">
                End of project
              </label>
              <input
                type="date"
                value={dateInputValue2}
                onChange={handleDateInput2Change}
                className="border-b-2 border-black pb-2 outline-none text-center px-3 py-2 w-full md:w-2/3 lg:w-2/3"
                placeholder="Input field 4"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleFormSubmit}
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
  );
};

export default ProjectButton;
