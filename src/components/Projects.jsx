import { motion } from "framer-motion";
import React, { useState } from "react";
const projectsObg = [
  {
    name: "VISE",
    imgSrc: "/Vise_front2-1326x1101.jpg",
    btnArray: ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"],
  },
  {
    name: "FYDE",
    imgSrc: "/original-2d630d753274ee2ada519f805ff6d673.png",
    btnArray: ["AGENCY", "COMPANY PRESENTATION"],
  },
  {
    name: "TRAWA",
    imgSrc: "/Frame-3875-1326x1101.jpg",
    btnArray: ["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"],
  },
  {
    name: `PREMIUM-BLEND`,
    imgSrc: "/PB-Front-4-1326x1101.png",
    btnArray: ["BRANDED TEMPLATE"],
  },
];

function Projects() {
  const [onHover, setHover] = useState(false);
  const [index, setIndex] = useState(null);
  return projectsObg.map((obg, i) => (
    <div key={i}>
      <div className="flex items-center gap-1 my-2">
        <div className="h-3 w-3 bg-white rounded-full"></div>
        <p>{obg.name}</p>
      </div>
      <div className="relative min-h-[25vh] max-h-[80vh] w-full  ">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl [text-shadow:_0_3px_3px_gray] absolute flex text-indigo-300
           ${
             i % 2 === 0
               ? "left-1/2 -translate-x-1/2 -translate-y-1/2 md:left-full md:-translate-x-1/2 md:-translate-y-1/2"
               : "right-1/2 translate-x-1/2 -translate-y-1/2 md:right-full md:translate-x-1/2 md:-translate-y-1/2"
           } top-1/2 font-bold leading-tight z-10`}
        >
          {index === i &&
            obg.name.split("").map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: "0", y: "100%" }}
                animate={
                  onHover
                    ? { opacity: "100%", y: "0" }
                    : { opacity: "0", y: "100%" }
                }
                transition={{ ease: [0.83, 0, 0.17, 1], delay: i * 0.03 }}
                className="inline-block"
              >
                {item}
              </motion.span>
            ))}
        </h1>

        <div
          onMouseEnter={() => {
            setIndex(i);
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          className="h-[40vh] xl:h-[60vh] w-full flex items-center justify-center"
        >
          <motion.img
            initial={{ scale: "1" }}
            animate={
              index === i && onHover
                ? { height: "95%", width: "95%" }
                : { height: "100%", width: "100%" }
            }
            transition={{ duration: 0.5 }}
            className={`h-full w-full object-cover rounded-xl`}
            src={obg.imgSrc}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        {obg.btnArray.map((array, i) => (
          <button key={i} className="border-2 rounded-full px-4 py-1">
            {array}
          </button>
        ))}
      </div>
    </div>
  ));
}

export default Projects;
