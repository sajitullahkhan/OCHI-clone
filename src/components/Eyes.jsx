import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const [rotateL, setRotateL] = useState(0);
  const [rotateR, setRotateR] = useState(0);
  const refL = useRef(null);
  const refR = useRef(null);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const L = refL.current.getBoundingClientRect();
      const R = refR.current.getBoundingClientRect();
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaXl = mouseX - (L.left + L.width / 2);
      let deltaYl = mouseY - (L.top + L.height / 2);

      let deltaXr = mouseX - (R.left + R.width / 2);
      let deltaYr = mouseY - (R.top + R.height / 2);

      let angleL = Math.atan2(deltaYl, deltaXl) * (180 / Math.PI);
      let angleR = Math.atan2(deltaYr, deltaXr) * (180 / Math.PI);
      setRotateL(angleL - 180);
      setRotateR(angleR - 180);
    });
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="relative w-full h-[70vh] md:h-full flex items-center justify-center my-20 -z-10"
    >
      <img src="/Top-Viewbbcbv-1-1440x921.jpg" alt="" className="w-screen" />
      <div className="absolute w-full h-full flex items-center justify-center gap-10 md:gap-20">
        {[refL, refR].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 bg-slate-200 rounded-full"
          >
            <motion.div
              ref={item}
              className="h-2/3 w-2/3 bg-black rounded-full overflow-hidden flex items-center justify-center"
            >
              <div
                className="w-full h-6"
                style={{
                  transform: `rotate(${i === 0 ? rotateL : rotateR}deg)`,
                }}
              >
                <div className="bg-slate-200 h-6 w-6 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyes;
