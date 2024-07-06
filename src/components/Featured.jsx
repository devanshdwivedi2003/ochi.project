import { motion } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  return (
    <div data-scroll data-scroll-section className=" relativew-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-500 pb-20">
        <h1 className="text-8xl font-gilroy tracking-tighter ">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <div className="cardconatiner relative  w-1/2 h-[80vh]  ">
            <div className=" card w-full h-full rounded-xl bg-green-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons  flex gap-5 ">
              <button className="rounded-full text-wrap border-2 text-xl p-2 px-6 mt-10">
                AUDIT
              </button>
              <button className="rounded-full text-wrap border-2 text-xl p-2 px-6 mt-10">
                COPYWRITING
              </button>
              <button className="rounded-full text-wrap border-2 text-xl p-2 px-6 mt-10">
                SALES DECK
              </button>
              <button className="rounded-full text-wrap border-2 text-xl p-2 px-6 mt-10">
                SLIDES DESIGN
              </button>
            </div>
          </div>
          <div className="cardconatiner relative w-1/2 h-[80vh]  ">
            <div className=" card w-full h-full rounded-xl bg-zinc-400 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="buttons  flex gap-5 ">
              <button className="rounded-full border-2 text-wrap text-xl p-2 px-6 mt-10">
                AGENCY
              </button>
              <button className="rounded-full text-wrap border-2 text-xl p-2 px-6 mt-10">
                COMPANY REPRESENTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
