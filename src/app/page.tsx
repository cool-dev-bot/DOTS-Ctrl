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
  <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-0">
    <img
      src="/Mobile.png"
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
          <img src="/GooglePlay.png" alt="Google Play" className="h-8 sm:h-10 group-hover:scale-95 transition-all duration-200 " />
        </div>
        <div className="bg-[#3A3A3C] flex items-center justify-center rounded-lg px-4 py-2 group ">
          <img src="/Apple.png" alt="App Store" className="h-8 sm:h-10 group-hover:scale-95 transition-all duration-200" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Fourth Section */}
{/* Fourth Section */}
<section className="relative bg-[#f8f8f8] py-20 px-6 md:px-16 lg:px-24 font-montserrat">
  <div className="flex flex-col md:flex-row items-start justify-between gap-16">

    {/* RIGHT SECTION (comes first on mobile) */}
    <div className="order-1 md:order-2 md:w-1/2 w-full md:space-y-[6vh]">
      {/* Sticky on small screen */}
      <div className="sticky top-16 md:static z-10 bg-[#f8f8f8] text-center py-4 mb-6  md:hidden">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#3A3A3C]">
          Why to go for
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#BF1E2E] mt-2">
          DOTS
        </h1>
        {/* Arrow - responsive direction */}
        <div className="text-[#BF1E2E] flex items-center justify-center mt-2 pl-6 md:pl-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.6}
            stroke="#BF1E2E"
            className="w-20 md:w-28 lg:w-40 h-20 md:h-28 lg:h-40 transform md:rotate-0 rotate-90" // rotates 90deg on small screens
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9m10 0v10" />
          </svg>
        </div>
      </div>

      {/* Scrollable points */}
      <div className="space-y-[6vh]">
        {[
          {
            num: "1",
            title: "Wide Range",
            text: "From centralized and decentralized systems to retrofit, wired, and wireless solutions — we provide a complete range of options tailored to your needs."
          },
          {
            num: "2",
            title: "Scalable",
            text: "Our lighting control solutions are designed to grow with you, from managing just a few channels to seamlessly handling several hundred."
          },
          {
            num: "3",
            title: "Hybrid",
            text: "Experience true flexibility with the ability to mix and match wired and wireless products, ensuring compatibility with all load types and wattages."
          },
          {
            num: "4",
            title: "3rd Party Control",
            text: "Integrate effortlessly with leading global brands to control DOTSCtrl products. Support for KNX IP interface coming soon."
          },
          {
            num: "5",
            title: "Service & Warranty",
            text: "Enjoy peace of mind with a 2-year comprehensive warranty on all GO by DOTSCtrl products, along with extended warranty options. For details, please connect with your dealer."
          },
          {
            num: "6",
            title: "Make in India",
            text: "Proudly designed and manufactured in India, each product is built to meet local power requirements and withstand diverse climatic conditions."
          },
        ].map((item, index) => (
          <div key={index} className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-[#BF1E2E]">{item.num}</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#3A3A3C]">{item.title}</h2>
            <p className="text-[#3A3A3C]/80 leading-relaxed text-lg md:text-xl">
              {item.text}
            </p>
          </div>
        ))}

        <div className="space-y-4 flex items-start justify-start ">
          <img src="/MakeInIndia.png" alt="Logo" className="w-64 md:w-80 " />
        </div>
      </div>
    </div>

    {/* LEFT SECTION (sticky for desktop only) */}
    <div className="order-2 md:order-1 md:w-1/2 w-full md:sticky md:top-24 self-start hidden md:block">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#3A3A3C]">
        Why to go for
      </h2>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#BF1E2E] mt-2">
        DOTS
      </h1>
      <div className="text-[#BF1E2E] mt-2 pl-6 md:pl-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.6}
          stroke="#BF1E2E"
          className="w-20 md:w-28 lg:w-40 h-20 md:h-28 lg:h-40"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5H9m10 0v10" />
        </svg>
      </div>
    </div>
  </div>
</section>





</div>
  </>
  );
}
