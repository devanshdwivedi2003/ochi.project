import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    
    <div  data-scroll  data-scroll-section data-scroll-speed=".1"  className='w-full  rounded-tl-3xl  rounded-tr-3xl py-20 bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden flex whitespace-nowrap'>

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity,duration:5}} className='text-[15vw] leading-none font-gilroy gap-2 tracking-tight font-bold uppercase pt-3 mb-6'>we are ochi</motion.h1 >

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity,duration:5}} className='text-[15vw] leading-none font-gilroy gap-2 tracking-tight font-bold uppercase pt-3 mb-6'>we are ochi</motion.h1 >

        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity,duration:5}} className='text-[15vw] leading-none font-gilroy gap-2 tracking-tight font-bold uppercase pt-3 mb-6'>we are ochi</motion.h1 >

      </div>
    </div>
  )
}

export default Marquee
