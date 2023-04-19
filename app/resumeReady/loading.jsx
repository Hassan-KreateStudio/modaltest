"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

function ResumeLoading() {
  return (
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
      <div className="bg-[#f3f1ff]">
        <div className="container mr-32 px-4 py-20 flex flex-col items-end">
          {/* Top right container content here */}
          <div className="mr-32">
            <p className="text-[55px] text-[#2b2148] mr-38 ">Job tips</p>
            <p class="whitespace-normal overflow-hidden h-8 leading-4 mt-1 text-[#978CB1]">
              Keep learning new skills to stay relevant
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col items-start bg-[#f3f1ff] mt-24">
          {/* Bottom left container content here */}
          <div className="text-[217px] text-[#7559b6] ml-16 flex">
            <CountUp end={100} duration={10} />
            <span className="text-[217px] text-[#988CB1]">%</span>
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
  );
}

export default ResumeLoading;
