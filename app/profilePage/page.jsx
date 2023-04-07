"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import AddOneLiner from "../addOneLiner/page";
import AddDescription from "../addDescription/page";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="flex flex-row justify-between p-6 bg-[#eeeaff]">
      <div className="flex flex-row items-center justify-center lg:justify-start">
        <div className="flex flex-col">
          <button
            className="block sm:hidden mr-6"
            onClick={handleMenuButtonClick}
          >
            <Image src={"/Menu.svg"} alt="menu" height={35} width={35} />
          </button>
          {isMenuVisible && (
            <div className="flex flex-col pt-10 space-y-2">
              <Link href={"/profilePage"}>Home</Link>
              <Link href={"/profilepage"}>Jobs</Link>
            </div>
          )}
        </div>

        <Image
          src={"/FindJobologo.svg"}
          alt="logo"
          height={58}
          width={291}
          className="mr-6 mb-4 sm:mb-0 sm:mr-0 sm:w-auto sm:h-auto sm:mx-auto pl-20 lg:pl-5 pt-4 pr-8"
        />
      </div>
      <div className="flex flex-row items-center lg:pr-20">
        <Image
          // src={"/CircleAvatar.svg"}
          src={"/CircleAvatar.svg"}
          alt="Profile Picture"
          width={32}
          height={32}
          className="block  mr-3"
        />
        <p className="hidden sm:block text-[575659]">Hassan Kulubya</p>
        {/* <p className="hidden sm:block text-[575659]">John Doe</p> */}
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <aside className="hidden sm:block bg-[#eeeaff] w-60 h-screen text-center ">
      <ul className="space-y-2 flex flex-col">
        <Link href={"/profilePage"}>Home</Link>
        <Link href={"/profilePage"}>Jobs</Link>
      </ul>
    </aside>
  );
};

const Profilepage = () => {
  const [avatarSrc, setAvatarSrc] = useState("/CircleAvatar.svg");

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
      };
    }
  }

  const textInputValue = "";

  return (
    <div className="flex flex-col bg-[#f8f7fb]">
      <Navbar />
      <div className="flex flex-col sm:flex-row md:flex-row space-x-10">
        <Sidebar />
        <div class="bg-white rounded-lg w-96 mt-10 flex items-center justify-start flex-col pt-5">
          <div class="w-204 h-204 rounded-full overflow-hidden border-4 border-purple-600  ">
            <Image
              // src={"/CircleAvatar.svg"}
              src={"/CircleAvatar.svg"}
              alt="Profile Picture"
              height={187}
              width={187}
            />
          </div>
          <label htmlFor="avatar-input">
            <img src="/AddPhoto.svg" height="54" width="196" className="mt-5" />
          </label>
          <input
            type="file"
            id="avatar-input"
            accept="image/*"
            style={{ display: "none" }}
          />
          <p className=" text-[#2b2148] font-bold mt-5 text-5xl text-center">
            Kulubya Hassan
          </p>
          <p className=" text-[#2b2148] mt-2 text-2xl text-center">Athlete</p>
          <p className=" text-inherit mt-2">Kampala,Uganda</p>

          <Image
            src={"/ProfileDivider.svg"}
            alt="divider"
            height={2}
            width={399}
            className="mt-3"
          />
          <div className="flex flex-row mt-5  justify-between">
            <h2 className="mb-2 mr-40">Skills</h2>
            <Image
              src={"/Edit.svg"}
              alt=""
              height={24}
              width={24}
              className="ml-40"
            />
          </div>
          <div>
            <Image
              src={"/AddSkills.svg"}
              width={202}
              height={53}
              className="h-auto m"
            />
          </div>
          <div className="flex flex-row mt-5  justify-between">
            <h2 className="mb-2 mr-40">Links</h2>
            <Image src={"/Edit.svg"} height={24} width={24} className="ml-40" />
          </div>
          <div>
            <Image src={"/Links.svg"} height={68} width={361} />
          </div>
          <div className="mt-10">
            <button className="rounded-full bg-[#6750A4] text-white px-8 py-4 w-72 flex flex-col items-center justify-center outline outline-[#6750A4] text-center">
              <div className="flex items-center justify-center space-x-2">
                <span>Share Profile</span>
              </div>
            </button>
            <button className="rounded-full bg-[#6750A4] text-white px-8 py-4 w-72 flex flex-col items-center justify-center outline outline-[#6750A4] text-center mt-5 pb-3">
              <div className="flex items-center justify-center space-x-2">
                <span>Export profile to resume</span>
              </div>
            </button>
            <button className="rounded-full bg-[#6750A4] text-white px-8 py-4 w-72 flex flex-col items-center justify-center outline outline-[#6750A4] text-center mt-5 pb-3">
              <div className="flex items-center justify-center space-x-2">
                <span>LogOut</span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <AddOneLiner
            imageSrc="/AddOneliner.svg"
            altText="Add One Liner"
            displayText={textInputValue}
          />
          <AddDescription
            imageSrc={"/AddDescription.svg"}
            altText="Add Description"
            displayText={textInputValue}
          />

          <Image
            src={"/AddProject.svg"}
            altText="Add Projects"
            height={313}
            width={554}
          />

          <div class="bg-white rounded-lg w-auto mt-10 flex items-center justify-start flex-col pt-5 mr-6">
            <h2 class="text-lg font-bold mb-2">Add Education</h2>
            <div class="mx-3 p-6 bg-gray-100 rounded-lg max-w-md">
              <p class="text-purple-600 text-lg">
                Please input any skills that you have that are relevant to the
                field of work you are interested in.
              </p>
            </div>
            <Image
              src={"/AddCircle.svg"}
              height={107}
              width={107}
              className="mr-auto"
            />
          </div>
        </div>
      </div>
      <footer className="bg-[#2B2148] py-8 px-4 flex flex-col md:flex-row justify-between md:items-center mt-52">
        <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
          <Image
            src="/FindJoboFooter.svg"
            width={290.69}
            height={88}
            alt="image description"
          />
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src="/WaapeKreateFooter.svg"
            width={318}
            height={81.07}
            alt="image description"
          />
        </div>
      </footer>
    </div>
  );
};

export default Profilepage;