"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "Electronics",
  "Mobiles",
  "Laptops",
  "Gaming",
  "Fashion Men",
  "Fashion Women",
  "Beauty & Personal Care",
  "Home & Kitchen",
  "Sports & Outdoor",
  "Toys & Games",
  "Accessories",
  "Supermarket",
];

function CategoryBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm border-t border-gray-200 relative z-40 sm:mt-20 mt-30">
      <div className="container mx-auto px-4">
        
        {/* Desktop view */}
        <div className="hidden md:flex gap-6 py-3">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="whitespace-nowrap font-medium text-gray-700 border-b-2 border-transparent hover:border-black hover:text-black transition-colors pb-1"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden py-3 relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-between w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-700 font-medium"
          >
            All Categories
            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border rounded-md shadow-md flex flex-col z-50">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  className="text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
