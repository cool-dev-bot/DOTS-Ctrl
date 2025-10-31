"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProductsPage = () => {
  const categories = [
    "Touch Switches",
    "Retrofit Switches",
    "IR Blaster",
    "Motion Sensor",
  ];

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
      description:
        "A sleek 2-module touch switch with modern design and smooth touch response.",
      img: "/switch1.jpg",
    },
    {
      id: 2,
      category: "Touch Switches",
      subcategory: "4 Module",
      model: "DOTS T4",
      color: "White",
      description:
        "Elegant 4-module touch switch designed for smart control and aesthetics.",
      img: "/switch2.jpg",
    },
    {
      id: 3,
      category: "Retrofit Switches",
      subcategory: "1 Channel",
      model: "DOTS R1",
      color: "Black",
      description:
        "Retrofit 1-channel switch for seamless smart conversion of traditional switches.",
      img: "/retrofit1.jpg",
    },
    {
      id: 4,
      category: "IR Blaster",
      subcategory: "WiFi",
      model: "DOTS IR-W",
      color: "Red",
      description:
        "WiFi-based IR Blaster that connects all your remote devices in one control.",
      img: "/irblaster.jpg",
    },
    {
      id: 5,
      category: "Motion Sensor",
      subcategory: "Wall Mounted",
      model: "DOTS MS-W",
      color: "White",
      description:
        "Wall-mounted motion sensor with high sensitivity and smart detection.",
      img: "/motion.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  // ✅ Fully disable background scroll when modal is open
  useEffect(() => {
    const html = document.documentElement;
    if (selectedProduct) {
      const scrollY = window.scrollY;
      html.style.position = "fixed";
      html.style.top = `-${scrollY}px`;
      html.style.width = "100%";
    } else {
      const scrollY = html.style.top;
      html.style.position = "";
      html.style.top = "";
      html.style.width = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [selectedProduct]);

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
    <section className="w-[95%] mx-auto py-16 md:py-24 font-montserrat relative">
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
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-3 bg-[#3A3A3C] text-white px-5 py-2 rounded-full hover:bg-[#BF1E2E] transition-all duration-300"
                >
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

      {/* Framer Motion Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-60"
            onClick={() => setSelectedProduct(null)} // click outside to close
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.85, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // prevent closing on click inside
              className="bg-white w-[90%] sm:w-[600px] rounded-2xl p-6 relative shadow-lg"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-600 text-4xl hover:text-[#BF1E2E]"
              >
                &times;
              </button>

              <img
                src={selectedProduct.img}
                alt={selectedProduct.model}
                className="w-full h-64 object-cover rounded-lg mb-5"
              />
              <h2 className="text-3xl font-semibold text-[#BF1E2E] mb-2">
                {selectedProduct.model}
              </h2>
              <p className="text-gray-700 font-medium mb-1">
                Category: {selectedProduct.category}
              </p>
              <p className="text-gray-700 font-medium mb-1">
                Subcategory: {selectedProduct.subcategory}
              </p>
              <p className="text-gray-700 font-medium mb-1">
                Color: {selectedProduct.color}
              </p>
              <p className="text-gray-600 mt-3">{selectedProduct.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsPage;
