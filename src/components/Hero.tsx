"use client";

import { LuCirclePlay } from "react-icons/lu";
import { BiMessageRoundedDetail } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF2CE] to-[#ffffff]/0">
      {/* Header */}
  <header className="flex  px-30 py-8  justify-end  text-[13px] montserrat">
        <nav className="hidden md:flex items-center space-x-14">
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            Restaurants
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            Grocery
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            Pharmacy & Meds
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            Gifts
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 ">
            E-Com
          </a>
          <div className="flex items-center space-x-10">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900  "
            >
              More
            </a>
           
          </div>
        </nav>

        <div className="flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 m ml-8"
          >
            Login
          </a>
          <button className="bg-[#E91E63] hover:bg-[#C2185B] text-white px-2 py-1 rounded-md  transition-all duration-200">
            Sign Up
          </button>
        </div>
      </header>


      {/* Main Content */}
      <main className="px-5 sm:px-10 lg:px-20 py-10 mt-5 w-full flex justify-center">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full items-center gap-10">
          {/* Left Content */}
          <div className="space-y-8 w-full max-w-xl">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Your delivery &<br />
                moving partner,<br />
                <span className="relative inline-block">
                  in one tap
                  <img
                    src="/images/ilustrator.svg"
                    alt=""
                    className="w-60 sm:w-80 mt-5"
                  />
                </span>
              </h1>

              <p className="text-sm text-gray-600 leading-relaxed max-w-md montserrat tracking-tight">
                Are you tired of the hassle and stress of ordering food,<br />
                requesting couriers, or moving to a new home? Look no <br />
                further than Rapidmate! Our app is designed to make your life
                easier by providing a one-stop solution for all your delivery and
                moving needs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 montserrat text-sm">
              <button className="bg-[#E91E63] hover:bg-[#C2185B] text-white px-4 py-2 rounded-full transition-all duration-200">
                Try free trial
              </button>

              <button className="text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200">
                <LuCirclePlay className="w-5 h-5" />
                View Demo
              </button>

              <button className="text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-full flex items-center gap-2 transition-all duration-200">
                <BiMessageRoundedDetail className="w-5 h-5" />
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="w-full lg:w-fit flex justify-center">
            <img
              src="/images/hero.svg"
              alt="Hero Illustration"
              className="h-[300px] sm:h-[400px] lg:h-[430px] w-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
