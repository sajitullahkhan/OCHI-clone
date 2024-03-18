import React, { useState } from "react";
import Projects from "./Projects";
import Footer from "./Footer";

function Featured() {
  let [footerTranslate, setFooterTranslate] = useState(100);
  window.addEventListener("wheel", () => {
    var bottomOffset = document.body.offsetHeight - window.innerHeight;
    var scrolled = window.scrollY;
    if (bottomOffset === scrolled) {
      if (footerTranslate === 0) {
        setFooterTranslate(0);
      } else {
        setFooterTranslate((footerTranslate -= 10));
      }
    } else {
      setFooterTranslate(100);
    }
  });
  return (
    <div className="relative overflow-hidden">
      <div className="w-full h-full text-white bg-slate-700">
        <h1 className="text-6xl py-10 pl-5 border-b-[1px]">
          Featured projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 mt-10 px-5 bg-slate-700">
          <Projects></Projects>
        </div>
        <div className="flex items-center justify-center py-20">
          <button className="bg-gray-950 py-4 px-6 rounded-full  flex gap-10 items-center">
            VIEW ALL CASE STUDIES
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </button>
        </div>
      </div>
      <Footer footerTranslate={footerTranslate}></Footer>
    </div>
  );
}

export default Featured;
