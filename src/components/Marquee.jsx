import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="bg-emerald-700 z-20 h-72 lg:h-[40vh] text-white w-screen lg:py-56 rounded-tr-xl rounded-tl-xl flex items-center justify-center"
    >
      <div className="border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden">
        {["WE ARE OCHI ", " WE ARE OCHI"].map((item, i) => (
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, duration: 20 }}
            key={i}
            className="pr-5 uppercase text-8xl md:text-[9.5rem] xl:text-[20rem] pt-4 pb-6 font-bold leading-none tracking-tighter"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
