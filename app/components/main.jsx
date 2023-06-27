"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Main() {

  useEffect(() => {
    Aos.init({ duration: 2000, mirror: true })
  })

  return (
    <div className="w-full h-auto pt-24 mt-[-20px] bg-neutral-400">
      
      {/* Scroll Effect */}
      <h1 data-aos="fade-left" className="text-white text-7xl text-center m-28 mt-[-50px] ">
        Stack
      </h1>
      {/* Scroll Effect */}

      <section className="mb-10">
        <div data-aos="fade-left" className="flex flex-row items-center justify-center">
          <Image
            src="/css.png"
            alt="css_profile"
            width={90}
            height={90}
            className={
              "z-10 opacity-95 mr-40 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/html.png"
            alt="html"
            width={90}
            height={90}
            className={
              "z-10 opacity-95 mr-36 mb-16 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/js1.png"
            alt="js_profile"
            width={95}
            height={0}
            className={
              "z-10 opacity-95 ml-2 mt-4 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
        </div>
        <div data-aos="fade-right" className="flex flex-row items-center justify-center pt-16 ml-20">
          <Image
            src="/express.png"
            alt="express"
            width={200}
            height={200}
            className={
              "z-10 opacity-95 mr-24 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/tail.png"
            alt="tailwind"
            width={200}
            height={200}
            className={
              "z-10 opacity-95 ml-8 mr-44 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/next.png"
            alt="next"
            width={220}
            height={220}
            className={
              "z-10 opacity-95 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
        </div>
        <div data-aos="fade-left" className="flex flex-row items-center justify-center pt-16 ml-20">
          <Image
            src="/nodej.png"
            alt="nodejs_profile"
            width={130}
            height={130}
            className={
              "z-10 opacity-95 mr-24 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/react.png"
            alt="react"
            width={100}
            height={100}
            className={
              "z-10 opacity-95 ml-4 mr-16 mt-20 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/mongo.png"
            alt="mongoDB"
            width={220}
            height={220}
            className={
              "z-10 opacity-95 ml-6 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
        </div>
      </section>
      <section data-aos="fade-right" className="h-[800px] w-full bg-neutral-500 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-white text-9xl">About</h1>
      </section>
      <section  data-aos="fade-left" className="h-[800px] w-full bg-pink-500 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-white text-9xl">Projects</h1>
      </section>
      <footer data-aos="fade-right" className="h-[800px] w-full bg-gray-800 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-white text-9xl">Footer</h1>
      </footer>
    </div>
  );
}