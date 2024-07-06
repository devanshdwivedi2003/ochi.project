import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-gilroy text-[3vw] tracking-tight leading-[4.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full  border-t-[2px] mt-20 pt-12 flex gap-40 border-[#839445]">
        <div className="w-1/2">
          <h1 className="text-6xl "> Our approach</h1>
          <button className="px-10 py-6 uppercase bg-zinc-900 mt-8 rounded-full text-white flex items-center gap-5">
            {" "}
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  rounded-3xl ">
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
