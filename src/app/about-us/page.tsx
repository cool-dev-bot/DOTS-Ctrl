import React from "react";

export default function AboutUs() {
  return (
    <div className="font-montserrat  text-[#3A3A3C] mt-12 md:mt-0">
      {/* SECTION 1 - ABOUT DOTS */}
<section className="w-[95%] mx-auto py-12 sm:py-16 md:py-24 flex flex-col md:flex-row items-start gap-10 md:gap-16">
  {/* LEFT SIDE */}
  <div className="md:w-[60%] w-full space-y-6">
    <h1 className="text-4xl sm:text-5xl md:text-8xl font-normal leading-tight">
      About <span className="text-[#BF1E2E]">DOTS</span>
    </h1>

    <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-medium">
      Since 2015, DOTS Ctrl has been at the forefront of automation,
      delivering innovative solutions that simplify operations and empower
      seamless control over everyday challenges. With a strong focus on
      reliability, efficiency, and cutting-edge technology, we specialize
      in creating intelligent systems that integrate effortlessly into
      modern lifestyles and businesses.
    </p>

    <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-medium">
      Our journey began with a vision to bridge technology and
      convenience. Over the years, we have expanded our expertise across
      automation domains — from smart infrastructure and energy-efficient
      solutions to process optimization and AI-driven controls.
    </p>

    {/* VISION BLOCK */}
    <div className="bg-[#BF1E2E] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10">
      {/* LEFT TEXT */}
      <div className="w-full md:w-[45%] text-center md:text-right">
        <h2 className="text-3xl sm:text-4xl md:text-[6vw] font-light leading-snug">
          VISION <br /> WE <br /> HAVE
        </h2>
      </div>

      {/* MIDDLE LINE */}
      <div className="hidden md:block w-[3px] bg-white h-[50vh]"></div>

      {/* RIGHT TEXT */}
      <div className="w-full md:w-[50%] text-center md:text-left">
        <p className="text-sm sm:text-base md:text-[1.3vw] leading-relaxed font-medium">
          At DOTS Ctrl, we believe that true automation is not just about
          machines, but about creating harmony between people, technology,
          and environments. Backed by years of experience, a commitment to
          excellence, and a passion for innovation, we continue to design
          solutions that empower our clients to stay ahead in an
          ever-evolving world.
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="md:w-[40%] w-full hidden md:flex  relative  justify-center mt-10 md:mt-0">
    <img
      src="/Bulb.jpg"
      alt="About DOTS"
      className="rounded-3xl w-full max-w-[500px] h-auto object-cover"
    />
    <h3 className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg sm:text-xl md:text-[1.6vw] font-medium text-white text-center  backdrop-blur-sm">
      <span className="text-[#BF1E2E]">Outstretching</span> Uniqueness
    </h3>
  </div>
</section>


      {/* SECTION 2 - TEAM BEHIND DOTS */}
      <section className="w-[95%] mx-auto bg-[#3A3A3C] text-white rounded-3xl py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-5xl  mb-10">
          Team Behind DOTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center">
          <img
            src="person1.png"
            alt="Team Member 1"
            className="w-40  md:w-80 rounded-md object-cover"
          />
          <img
            src="person2.png"
            alt="Team Member 1"
            className="w-40  md:w-80 rounded-md object-cover"
          />
          <img
            src="person3.png"
            alt="Team Member 1"
            className="w-40  md:w-80 rounded-md object-cover"
          />
       
        </div>
      </section>
<section className="w-[95%] mx-auto py-20 md:py-24 flex flex-col md:flex-row items-center gap-12">
  {/* LEFT IMAGE */}
  <div className="md:w-[45%] w-full flex items-center justify-center">
    <img
      src="/Research-Section.jpg"
      alt="Research"
      className="rounded-3xl w-full h-auto max-h-[850px] xl:max-h-[750px] object-cover"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div className="md:w-[55%] w-full space-y-5 flex flex-col justify-center">
    <h1 className="text-4xl md:text-6xl ">
      DOTS <span className="text-[#BF1E2E]">Research</span>
    </h1>

    <p className="text-lg leading-relaxed font-medium">
      The progress and success of DOTS Ctrl is driven by its strong Research &
      Development (R&D) foundation, where our core team dedicates its expertise
      to every aspect of product design and innovation. Since 2015, we have
      consistently focused on building automation solutions that combine
      advanced technology with real-world usability.
    </p>

    <p className="text-lg leading-relaxed font-medium">
      Every solution we deliver is the result of in-house innovation — from
      hardware design and embedded firmware to software platforms, mobile
      applications, user interfaces, documentation, and training support. With
      years of experience in automation, electronics, and intelligent control
      systems, our team emphasizes reliability, scalability, and adaptability to
      ensure our products thrive even in challenging environments.
    </p>

    <p className="text-lg leading-relaxed font-medium">
      To stay ahead of industry trends, DOTS Ctrl has invested significantly in
      advanced design tools, licensed technologies, and state-of-the-art testing
      environments. Our commitment to research ensures that we remain at the
      cutting edge of automation, incorporating the latest advancements in IoT,
      AI-driven automation, energy management, and cybersecurity.
    </p>

    <p className="text-lg leading-relaxed font-medium">
      Over the years, DOTS Ctrl has partnered with leading enterprises,
      institutions, and solution providers, delivering automation systems that
      enhance smart homes, corporate boardrooms, hospitality environments, and
      industrial operations. Each project reflects our philosophy of creating
      seamless, intelligent, and reliable control solutions that empower users
      to meet the demands of today and tomorrow.
    </p>
  </div>
</section>


    </div>
  );
}
