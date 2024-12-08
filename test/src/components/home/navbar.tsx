import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-4 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-2" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-2" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-72 font-semibold">
              Follow Us and get a chance to win 80% off
            </span>
            <span className="mr-2 font-bold">Follow Us:</span>
            <div className="flex space-x-3">
              <Instagram size={16} className="cursor-pointer" />
              <FiYoutube size={16} className="cursor-pointer" />
              <Facebook size={16} className="cursor-pointer" />
              <Twitter size={16} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold">Bandage</h1>
              <div className="hidden md:flex space-x-4 font-semibold">
                <Link href="/" className="text-gray-700">
                Home
                </Link>
                <Link href="/shop" className="text-gray-700">
                Shop
                </Link>
                <Link href="/about" className="text-gray-700">
                About
                </Link>
                <Link href="/" className="text-gray-700">
                Blog
                </Link>
                <Link href="/" className="text-gray-700">
                Contact
                </Link>
                <Link href="/" className="text-gray-700">
                Pages
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-blue-500">Login / Register</button>
              <div className="flex items-center space-x-4">
                <button className="p-2">
                  <CiSearch />
                </button>
                <button className="p-2">
                  <AiOutlineShoppingCart />
                </button>
                <button className="p-2">
                  <CiHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingPage;
