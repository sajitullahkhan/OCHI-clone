import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="bg-green-800 h-full w-screen"
    >
      <div className="bg-lime-600 text-white h-full w-screen rounded-tr-xl rounded-tl-xl">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-16 px-4 w-full lg:px-20 ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to <span>raise funds</span>, sell products,
          <span>explain complex ideas</span>, and hire great people.
        </h3>
        <hr />
        <div className="mx-5 md:flex md:justify-around md:text-xl lg:text-2xl">
          <p className="my-5">What you can expect:</p>
          <div>
            <p className="my-5">
              We create tailored presentations to help <br />
              you persuade your colleagues, clients, or <br />
              investors. Whether it's live or digital, <br />
              delivered for one or a hundred people. <br />
            </p>
            <p className="my-5">
              We believe the mix of strategy and <br />
              design (with a bit of coffee) is what <br />
              makes your message clear, convincing, <br />
              and captivating.
            </p>
          </div>
          <div className="my-5">
            <p>S:</p>
            <ul>
              {["Instagram", "Facebook", "LinkedIn"].map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
        <div className="grid lg:grid-cols-2 w-screen">
          <div className="ml-5 lg:ml-20 ">
            <h1 className="text-4xl lg:text-6xl my-3">Our approach:</h1>
            <button className="bg-gray-950 py-4 px-6 rounded-full  flex gap-10 items-center">
              READ MORE
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </button>
          </div>
          <div className="py-5">
            <div className="h-96 w-[90%] md:w-[80%] lg:w-[70%] bg-lime-800 rounded-3xl mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
