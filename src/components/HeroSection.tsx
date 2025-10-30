"use client";
import React from "react";

const HeroSection = () => {
  return (
<section className="font-montserrat min-h-[90vh] w-[98%] mx-auto rounded-xl flex flex-col items-center justify-center text-center  bg-[linear-gradient(to_top,_#dbeafe_0%,_rgba(219,234,254,0.7)_40%,_transparent_95%,_white_80%)] py-1">

      {/* Text Content */}
      <div className="text-[#BF1E2E]">
        <h1 className="text-4xl w-full lg:text-6xl xl:text-8xl font-light leading-tight ">
          Automizing <br />
          <span className="">for a Seamless Control</span>
        </h1>

        <p className="mt-6 text-[#3A3A3C] text-sm md:text-lg lg:text-xl xl:text-2xl font-medium ">
          DOTS Ctrl is the place where technology meets excellence to automate
          operations for <br></br>seamless control on daily challenges.
        </p>
      </div>

      {/* Hero Image */}
      <div className=" w-full p-0 ">
        <img
          src="/Hands.png" // 👈 transparent background image here
          alt="Automation Illustration"
          className="w-full mx-auto object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
