import Image from "next/image";
import cart from "/public/Images/icn favorite.png";
import eye from "/public/Images/icn favorite (1).png";
import arrow from "/public/Images/vectorright.png";
import home from "/public/Images/unsplash_QANOF9iJlFs.png";

import mainImage from "/public/Images/single-product-1-cover-2.jpg";
import image1 from "/public/Images/single-product-1-thumb-1.jpg";
import image2 from "/public/Images/single-product-1-thumb-2.jpg";

import React from 'react'

const Pages = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Your existing page content */}
        <div className="w-[1440px] h-[92px] py-[24px] bg-[#FAFAFA]">
          <div className="w-[1033px] h-[44px] absolute top-[190px] left-[130px] flex gap-[30px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>

        {/* Your Product Section */}
        <div className="container absolute top-[200px] left-[100px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
          {/* Left Section - Image Slider */}
          <div className="flex-1">
            <div className="relative">
              <Image
                src={mainImage}
                alt="Product Image"
                className="rounded-lg"
                width={600}
                height={400}
              />
              {/* Arrows */}
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 gap-4">
              <Image
                src={image1}
                alt="Thumbnail 1"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
              <Image
                src={image2}
                alt="Thumbnail 2"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold text-gray-800">Floating Phone</h1>
            {/* Price and Details */}
            <p className="text-xl font-Montserrat font-semibold text-black mt-4">$1,139.33</p>
            <p className="text-sm text-gray-500 mt-2">
              Availability:{" "}
              <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>
            <p className="text-gray-700 mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </p>
          </div>
        </div>

        {/* More Content */}
        <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 absolute top-[1000px] left-[200px] items-center justify-center">
          {/* Content Here */}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Pages;
