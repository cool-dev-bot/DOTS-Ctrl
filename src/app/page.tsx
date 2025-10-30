import Image from "next/image";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
  <>
  <div className="w-full h-full  ">
  <HeroSection/>
<div className=" px-20 py-20 w-full flex  items-center justify-evenly">
<div> 
  <h2 className="text-[#3A3A3C] font-bold text-8xl">50 +</h2>
  <p className="text-[#BF1E2E] font-light text-2xl">COMPLETED PROJECTS</p>
</div>
<div> 
  
  <p className="text-[#BF1E2E]  font-extralight text-7xl">FACTORY</p>
  <h2 className="text-[#3A3A3C] font-bold text-4xl text-start">AUTOMATION</h2>
</div>
<div> 
  
  <p className="text-[#BF1E2E]  font-extralight text-7xl">HOME</p>
  <h2 className="text-[#3A3A3C] font-bold text-4xl text-start">AUTOMATION</h2>
</div>
<div className="flex items-center justify-center"> <button className="text-[#BF1E2E] text-3xl font-light">MORE →</button></div>
</div>
<div className="bg-[#BF1E2E] h-[50vh] w-[98%] mx-auto rounded-xl my-2">
dd
</div>
<div className="bg-blue-400 h-[50vh] w-full">
dd
</div>
</div>
  </>
  );
}
