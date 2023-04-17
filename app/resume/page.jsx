import Image from "next/image";
import React from "react";

function Resume() {
  return (
    <div className="flex bg-white">
      <div className="flex-1 mt-10 ml-20  ">
        {/* Column 1 */}
        <h2 className="text-xl font-bold mb-2 text-[#6750A4]">
          Kulubya Hassan
        </h2>
        <h3>Entrepreneur</h3>
        <div className="flex mt-3 flex-col space-y-3 ">
          <div className="flex space-x-3">
            <Image src={"/Location.svg"} height={20} width={20} />
            <p>Kampala,Uganda</p>
          </div>
          <div className="flex space-x-3">
            <Image src={"/Call.svg"} height={20} width={20} />
            <p>Kampala,Uganda</p>
          </div>
          <div className="flex space-x-3">
            <Image src={"/Email.svg"} height={20} width={20} />
            <p>Kampala,Uganda</p>
          </div>
        </div>
        <div className="flex mt-8 flex-col space-y-3 ">
          <div className="flex ">
            <h2 className="text-[#6750A4]">Education</h2>
          </div>
          <div class="container mx-auto">
            <p class=" font-bold">Bachelor of Commerce: Marketing</p>
            <p class=" mt-2">Makerere University Business School</p>
            <p class="mt-2 text-[#6750A4]">January 2021 - Present</p>
          </div>
          <div class="container mx-auto mt-4">
            <p class=" font-bold">A level</p>
            <p class=" mt-2">Kings College Budo</p>
            <p class="mt-2 text-[#6750A4]">January 2018 - December 2019</p>
          </div>
          <div class="container mx-auto">
            <p class=" font-bold">O level</p>
            <p class=" mt-2">Kings College Budo</p>
            <p class="mt-2 text-[#6750A4]">January 2014 - December 2017</p>
          </div>
          <div className="mt-30">
            <Image
              width={291}
              height={58}
              src={"FindJobologo.svg"}
              className="mt-52"
            />
          </div>
        </div>
      </div>
      <div className="w-4 h-screen rounded-full bg-[#eeeaff] mr-30 flex justify-center mt-20"></div>
      <div className="flex-1 p-4 ml-10 mt-8">
        {/* Column 2 */}
        <h2 className="text-xl font-bold mb-2 text-[#6750A4] ">Summary</h2>
        <div class="container mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <h2 className="text-xl font-bold mb-2 text-[#6750A4] mt-5 ">Skills</h2>
        <div class="container mx-auto flex flex-col">
          <p>Eating</p>
          <p>Walking</p>
          <p>Running</p>
        </div>
        <h2 className="text-xl font-bold mb-2 text-[#6750A4] mt-5 ">
          Projects/Work Experience
        </h2>
        <div class="container mx-auto">
          <p class=" font-bold">Sales Representative</p>
          <p class=" mt-2">Kings College Budo</p>
          <p class=" text-[#6750A4]">January 2014 - December 2017</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="container mx-auto mt-5">
          <p class=" font-bold">Waiter</p>
          <p class=" mt-2">Endiro Coffee</p>
          <p class=" text-[#6750A4]">January 2014 - Present</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="container mx-auto">
          <p class=" font-bold mt-5">Sales Representative</p>
          <p class=" mt-2">Kings College Budo</p>
          <p class=" text-[#6750A4]">January 2014 - December 2017</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
