"use client";
import React, { useState } from "react";

const QuotationPage = () => {
  // ✅ Added explicit types
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const categories = [
    "Touch Switches",
    "Retrofit Switches",
    "IR Blaster",
    "Motion Sensor",
  ];

  const products = [
    {
      id: 1,
      model: "Smart Touch Switch",
      color: "Black",
      category: "Touch Switches",
      image: "/Bulb.jpg",
    },
    {
      id: 2,
      model: "Retrofit Controller",
      color: "White",
      category: "Retrofit Switches",
      image: "/Bulb.jpg",
    },
    {
      id: 3,
      model: "IR Blaster Pro",
      color: "Red",
      category: "IR Blaster",
      image: "/Bulb.jpg",
    },
    {
      id: 4,
      model: "Motion Detector",
      color: "Black",
      category: "Motion Sensor",
      image: "/Bulb.jpg",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // ✅ Added type for `id`
  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="w-[95%] mx-auto py-16 md:py-24 font-montserrat">
      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-semibold mb-10 text-center">
        Get <span className="text-[#BF1E2E]">Quotation</span>
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex overflow-x-auto gap-3 md:gap-6 mb-10 pb-2">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border font-medium whitespace-nowrap transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#BF1E2E] text-white border-[#BF1E2E]"
                : "border-[#3A3A3C] text-[#3A3A3C] hover:bg-[#3A3A3C] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-2xl overflow-hidden flex flex-col items-center p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.model}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />
            <p className="text-lg font-semibold text-[#BF1E2E]">
              {product.model}
            </p>
            <p className="text-sm text-[#3A3A3C] mb-3">
              Colour: {product.color}
            </p>
            <button className="bg-[#3A3A3C] text-white px-4 py-2 rounded-full mb-3">
              View Details
            </button>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
              />
              <span>Add to Selection</span>
            </label>
          </div>
        ))}
      </div>

      {/* CONTACT FORM */}
      <div className="w-full md:w-[60%] mx-auto border border-[#D9D9D9] rounded-2xl p-6 md:p-10">
        <div className="space-y-6">
          {["Name", "Phone", "Email"].map((label) => (
            <div key={label} className="flex flex-col">
              <label className="font-medium mb-1">{label}</label>
              <input
                type={label === "Email" ? "email" : "text"}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BF1E2E]"
              />
            </div>
          ))}

          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold w-full hover:bg-[#BF1E2E] transition-all duration-300">
            Get Quotation for Selected
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuotationPage;
