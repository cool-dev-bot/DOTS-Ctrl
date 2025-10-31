import React from 'react'

function Contact() {
  return (
    <>
    <section className="w-[95%] mx-auto py-16 md:py-24 mt-10 md:mt-2 lg:mt-0">
  {/* Heading */}
  <h1 className="text-5xl md:text-7xl  mb-12 text-center">
    Let’s <span className="text-[#BF1E2E]">Talk</span>
  </h1>

  {/* Main Layout */}
  <div className="flex flex-col md:flex-row gap-12">
    {/* LEFT SIDE - Contact Form */}
    <div className="md:w-1/2 w-full border border-[#D9D9D9] rounded-3xl p-8 sm:p-10 bg-white shadow-sm">
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#BF1E2E]"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#BF1E2E]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#BF1E2E]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
          <textarea
          
            placeholder="Write your message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#BF1E2E]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#BF1E2E] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    {/* RIGHT SIDE - Location Map */}
    <div className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-md">
      <iframe
        title="location"
        className="w-full h-[400px] md:h-full rounded-3xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.4459336482197!2d72.57136287440594!3d23.00842737917898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f629b9b9cf%3A0x2c6a6dce569ce38!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1698672320460!5m2!1sen!2sin"
       
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact