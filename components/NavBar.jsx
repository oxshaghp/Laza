import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { Button } from "./ui/button";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--primary-color)] text-[var(--secondry-color)] shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center h-[70px] px-4">
        
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer font-serif"><Link href="/">LAZA</Link></div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-[40px] bg-[var(--white-color)] px-4 rounded-md border border-[var(--secondry-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Lang */}
          <Button className="h-[40px]  px-4 rounded-md borde transition cursor-pointer " variant="link" size="sm">
            العربية
          </Button>
          |
            {/* Auth */}
          <Button className="h-[40px]  px-4 rounded-md borde transition flex items-center gap-2 cursor-pointer " variant="secondary" size="sm">
            Log In
            <CgProfile />
          </Button>
          |
            {/* Icons */}
          <CiHeart className="text-2xl cursor-pointer hover:text-red-500 transition" />
          <CiShoppingCart className="text-2xl cursor-pointer hover:text-yellow-500 transition" />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="block md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-[40px] bg-[var(--white-color)] px-4 rounded-md border border-[var(--secondry-color)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        />
      </div>
    </nav>
  );
}

export default NavBar;
