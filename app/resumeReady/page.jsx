"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeLoading from "./loading";

function ResumeReady() {
  const [delayOver, setDelayOver] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayOver(true);
    }, 20000);

    return () => {
      clearTimeout(delayTimer);
    };
  }, []);
  return delayOver ? (
    <div>
      <nav className="flex flex-row justify-between p-6 bg-[#eeeaff] h-20">
        <div className="flex flex-row items-center justify-center lg:justify-start">
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
            src={"/AccountCircle.svg"}
            alt="Profile Picture"
            width={32}
            height={32}
            className="block  mr-3"
          />
          <p className="hidden sm:block text-[575659]">Hassan Kulubya</p>
        </div>
      </nav>
      <div className="flex bg-[#f3f1ff]">
        <div className="flex-1 ml-20 mt-10 mb-20 h-[550px] w-[550px]  overflow-hidden shadow-2xl rounded-3xl ">
          {/* Content for the first column goes here */}

          <div class="text-lg md:text-xl lg:text-2xl">
            <Link href={"/resume"}>
              <div className="flex bg-white">
                <div className="flex-1 mt-10 ml-20  ">
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
                      <p class="mt-2 text-[#6750A4]">
                        January 2018 - December 2019
                      </p>
                    </div>
                    <div class="container mx-auto">
                      <p class=" font-bold">O level</p>
                      <p class=" mt-2">Kings College Budo</p>
                      <p class="mt-2 text-[#6750A4]">
                        January 2014 - December 2017
                      </p>
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
                  <h2 className="text-xl font-bold mb-2 text-[#6750A4] ">
                    Summary
                  </h2>
                  <div class="container mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-[#6750A4] mt-5 ">
                    Skills
                  </h2>
                  <div class="container mx-auto flex flex-col">
                    <p>Eating</p>
                    <p>Walking</p>
                    <p>Running</p>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-[#6750A4] mt-5 ">
                    Projects/Work Experience
                  </h2>
                  <div class="container mx-auto">
                    <p class=" font-bold mt-5">Sales Representative</p>
                    <p class=" mt-2">Kings College Budo</p>
                    <p class=" text-[#6750A4]">January 2014 - December 2017</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div class="container mx-auto mt-5">
                    <p class=" font-bold">Waiter</p>
                    <p class=" mt-2">Endiro Coffee</p>
                    <p class=" text-[#6750A4]">January 2014 - Present</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex-1">
          {/* Content for the second column goes here */}
          <div className="flex flex-col ml-20 mt-10">
            <div className="space-y-4">
              <p className="text-5xl text-[#6750A4]">Your resume is ready!</p>
              <p className="text-2xl text-[#978CB1]">PDF export complete</p>
              <p className="text-2xl text-[#978CB1]">
                231.8<span className="ml-2">KB</span>
              </p>
            </div>
            <div className=" mt-20">
              <Image
                src={"Download.svg"}
                height={210}
                width={210}
                alt="Download"
                className="mt-20"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#2B2148] py-8 px-4 flex flex-col md:flex-row justify-between md:items-center mt-42">
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
  ) : (
    <div>
      <ResumeLoading />
    </div>
  );
}

export default ResumeReady;
