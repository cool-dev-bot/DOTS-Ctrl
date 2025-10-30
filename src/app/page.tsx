import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
  <>
  <div className="w-full h-full  ">
  <HeroSection/>


  {/* Second Section */}
<div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 flex flex-col sm:flex-wrap md:flex-row items-center justify-evenly text-center md:text-left gap-10 md:gap-6">
  {/* Box 1 */}
  <div>
    <h2 className="text-[#3A3A3C] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
      50 +
    </h2>
    <p className="text-[#BF1E2E] font-light text-xl sm:text-2xl">
      COMPLETED PROJECTS
    </p>
  </div>

  {/* Box 2 */}
  <div>
    <p className="text-[#BF1E2E] font-extralight text-5xl sm:text-6xl md:text-7xl">
      FACTORY
    </p>
    <h2 className="text-[#3A3A3C] font-bold text-2xl sm:text-3xl md:text-4xl">
      AUTOMATION
    </h2>
  </div>

  {/* Box 3 */}
  <div>
    <p className="text-[#BF1E2E] font-extralight text-5xl sm:text-6xl md:text-7xl">
      HOME
    </p>
    <h2 className="text-[#3A3A3C] font-bold text-2xl sm:text-3xl md:text-4xl">
      AUTOMATION
    </h2>
  </div>

  {/* Box 4 */}
<div className="flex items-center justify-center">
  <button className="flex items-center justify-center gap-2 text-[#BF1E2E] text-lg sm:text-xl font-light group  ">
    MORE 
    <span className="text-2xl transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125">
      →
    </span>
  </button>
</div>

</div>


{/* Thired Section */}
<section className="bg-[#BF1E2E] w-[98%] mx-auto rounded-xl pt-16 md:pt-24 px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-between text-white font-montserrat gap-10 md:gap-6">
  {/* Left Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-none">
    <img
      src="Mobile.png"
      alt="Control App"
      className="w-3/4 sm:w-2/3 md:w-full max-w-sm md:max-w-none"
    />
  </div>

  {/* Right Side - Content */}
  <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
      Every Control is in your Hand
    </h1>

    {/* White line */}
    <div className="w-24 md:w-full h-[3px] bg-white mx-auto md:mx-0"></div>

    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90">
      Dots Home mobile app transforms the way you interact with your home.
      Control lights, appliances, climate, and security systems—all from the
      palm of your hand. Whether you’re at home, at work, or traveling, Dots Home
      keeps you connected, secure, and in control.
    </p>

    <div className="pt-2">
      <p className="font-semibold mb-3 text-base sm:text-lg lg:text-xl">Download From</p>

      {/* Download buttons */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 ">
        <div className="bg-[#3A3A3C] flex items-center justify-center rounded-lg px-4 py-2 group ">
          <img src="GooglePlay.png" alt="Google Play" className="h-8 sm:h-10 group-hover:scale-95 transition-all duration-200 " />
        </div>
        <div className="bg-[#3A3A3C] flex items-center justify-center rounded-lg px-4 py-2 group ">
          <img src="Apple.png" alt="App Store" className="h-8 sm:h-10 group-hover:scale-95 transition-all duration-200" />
        </div>
      </div>
    </div>
  </div>
</section>



<div className="bg-white h-[10vh] w-full">
.
</div>
</div>
  </>
  );
}
