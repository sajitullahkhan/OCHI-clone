import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.6"
      className="h-screen w-full bg-slate-900 text-white mb-40 xl:mb-96"
    >
      <div className="py-28 lg:py-60 pl-5 lg:pl-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((items, i) => {
          return (
            <div key={i} className="flex">
              {i === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.55, 0, 1, 0.45], duration: 0.4 }}
                  className="h-10 lg:h-14 mt-2 lg:mt-3 xl:h-20 xl:mt-4 rounded-lg bg-red-500"
                ></motion.div>
              )}
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none">
                {items}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-full border-t-[1px] border-white  lg:flex lg:justify-between py-10 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, i) => (
          <p key={i} className={`${i === 1 && "pt-8"} leading-none lg:pt-0`}>
            {items}
          </p>
        ))}
        <div className="mt-8 lg:mt-0 flex">
          <button className="border-2 rounded-3xl px-5 py-1 text-sm">
            START THE PROJECT
          </button>
          <div className="h-10 w-10 bg-transparent border-2 ml-2 rounded-full flex items-center justify-center -rotate-45">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
