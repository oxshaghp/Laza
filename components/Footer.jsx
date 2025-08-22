import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiApplepay } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">LAZA</h2>
          <p className="text-gray-600 text-sm">
            LAZA is your trusted e-commerce platform for electronics, fashion,
            home essentials, and more. Shop the latest products with fast
            delivery and secure payment options.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-black">About Us</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-black">Customer Service</a></li>
            <li><a href="#" className="hover:text-black">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-black">Track Your Order</a></li>
            <li><a href="#" className="hover:text-black">FAQs</a></li>
          </ul>
        </div>

        {/* Social & Payment */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h3>
          <div className="flex gap-3 mb-5">
            <a href="#"><FaFacebookF className="text-xl text-gray-600 hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="text-xl text-gray-600 hover:text-blue-400" /></a>
            <a href="#"><FaInstagram className="text-xl text-gray-600 hover:text-pink-500" /></a>
            <a href="#"><FaYoutube className="text-xl text-gray-600 hover:text-red-600" /></a>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">Payment Methods</h3>
          <div className="flex gap-4">
            <SiVisa className="text-3xl text-gray-700" />
            <SiMastercard className="text-3xl text-gray-700" />
            <SiPaypal className="text-3xl text-gray-700" />
            <SiApplepay className="text-3xl text-gray-700" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 mt-6">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} LAZA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
