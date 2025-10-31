import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#3A3A3C] font-montserrat mt-0">
      {/* Top Red Line */}
      <div className="w-full h-[2px] bg-[#BF1E2E]"></div>

      {/* Footer Content */}
      <div className="w-[95%] mx-auto py-10 flex flex-col md:flex-row items-center md:items-start justify-between  gap-2 sm:gap-5  md:gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img  src="/logo.png" alt="Logo" className="w-32 md:w-40" />
        </div>

        {/* Location & Contact */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 w-full md:w-auto">
          {/* Location */}
          <div className="flex items-start gap-3 max-w-sm px-5 md:px-0">
            <FaMapMarkerAlt className="text-[#BF1E2E] text-xl mt-1" />
            <p className="text-sm md:text-base leading-relaxed ">
              107 - Mahavir Estate, Nr Kothari Cross Road, Santej, Kalol,
              Gandhinagar, Gujarat 382721, India
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col md:flex-col  md:items-start gap-2 mt-4 md:mt-0 pl-5 md:pl-0">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#BF1E2E] text-lg" />
              <p className="text-sm md:text-base">+91 8128933666</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#BF1E2E] text-lg" />
              <p className="text-sm md:text-base">Jaimin@cynthecys.com</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-3 items-center">
          <p className="text-[#BF1E2E] font-semibold text-lg text-start">Find Us</p>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="text-[#3A3A3C] text-xl hover:text-[#BF1E2E] transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-[#3A3A3C] text-xl hover:text-[#BF1E2E] transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-[#3A3A3C] text-xl hover:text-[#BF1E2E] transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="text-[#3A3A3C] text-xl hover:text-[#BF1E2E] transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
