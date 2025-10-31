"use client";
import React, { useState } from "react";

const ProductsPage = () => {
  const categories = [
    "Touch Switches",
    "Retrofit Switches",
    "IR Blaster",
    "Motion Sensor",
  ];

  // ✅ Type-safe and flexible definition
  const subcategoriesData: Record<string, string[]> = {
    "Touch Switches": ["2 Module", "4 Module", "6 Module"],
    "Retrofit Switches": ["1 Channel", "2 Channel"],
    "IR Blaster": ["WiFi", "Bluetooth"],
    "Motion Sensor": ["Ceiling", "Wall Mounted"],
  };

  const productsData = [
    {
      id: 1,
      category: "Touch Switches",
      subcategory: "2 Module",
      model: "DOTS T2",
      color: "Black",
      img: "/switch1.jpg",
    },
    {
      id: 2,
      category: "Touch Switches",
      subcategory: "4 Module",
      model: "DOTS T4",
      color: "White",
      img: "/switch2.jpg",
    },
    {
      id: 3,
      category: "Retrofit Switches",
      subcategory: "1 Channel",
      model: "DOTS R1",
      color: "Black",
      img: "/retrofit1.jpg",
    },
    {
      id: 4,
      category: "IR Blaster",
      subcategory: "WiFi",
      model: "DOTS IR-W",
      color: "Red",
      img: "/irblaster.jpg",
    },
    {
      id: 5,
      category: "Motion Sensor",
      subcategory: "Wall Mounted",
      model: "DOTS MS-W",
      color: "White",
      img: "/motion.jpg",
    },
  ];
const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredProducts = productsData.filter((product) => {
    if (!selectedCategory) return true;
    if (selectedCategory && !selectedSubcategory)
      return product.category === selectedCategory;
    return (
      product.category === selectedCategory &&
      product.subcategory === selectedSubcategory
    );
  });

  return (
    <section className="w-[95%] mx-auto py-16 md:py-24 font-montserrat">
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-semibold mb-10 text-center">
        Our <span className="text-[#BF1E2E]">Products</span>
      </h1>

      {/* Category Buttons */}
      <div className="overflow-x-auto scrollbar-hide mb-6">
        <div className="flex gap-4 min-w-max px-2 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedSubcategory(null);
              }}
              className={`px-6 py-2 whitespace-nowrap rounded-full border border-[#3A3A3C] text-lg font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#3A3A3C] text-white"
                  : "text-[#3A3A3C] hover:bg-[#3A3A3C] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Buttons */}
      {selectedCategory && (
        <div className="overflow-x-auto scrollbar-hide mb-10">
          <div className="flex gap-3 min-w-max px-2 sm:px-0">
            {subcategoriesData[selectedCategory]?.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-5 py-2 whitespace-nowrap rounded-full border border-[#BF1E2E] text-base font-medium transition-all duration-300 ${
                  selectedSubcategory === sub
                    ? "bg-[#BF1E2E] text-white"
                    : "text-[#BF1E2E] hover:bg-[#BF1E2E] hover:text-white"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-[#D9D9D9] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={product.img}
                alt={product.model}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 space-y-2">
                <p className="text-xl font-semibold text-[#BF1E2E]">
                  {product.model}
                </p>
                <p className="text-[#3A3A3C] text-base font-medium">
                  Colour: {product.color}
                </p>
                <button className="mt-3 bg-[#3A3A3C] text-white px-5 py-2 rounded-full hover:bg-[#BF1E2E] transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsPage;
