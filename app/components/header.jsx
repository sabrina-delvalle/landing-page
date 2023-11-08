"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Header() {

  useEffect(() => {
    Aos.init({duration: 2000})
  })

  return (
    <div className="h-auto max-sm:w-full relative overflow-hidden max-sm:overflow-hidden">
      <header className="relative flex justify-center bg-neutral-700 w-full h-20">
        <nav  data-aos="zoom-out" className="flex justify-center items-center gap-40 max-sm:gap-10 max-[450px]:gap-5 max-md:gap-10 max-lg:gap-20  max-xl:gap-32 max-xl:px-1 max-lg:px-1 max-sm:p-0.5 max-sm:px-0 p-6 px-20 text-white w-4/5">
          <a
            href="/"
            className="text-base max-sm:text-sm  hover:scale-125 easi-in duration-300"
          >
            about
          </a>
          <a
            href="/"
            className="text-base max-sm:text-sm hover:scale-125 easi-in duration-300"
          >
            projects
          </a>
          <span>
            <Image
              src="/logo.svg"
              alt="sabrina_pic"
              width={55}
              height={55}
              className={"mb-4 max-[350px]:mt-[16px] max-[350px]:ml-[0px] max-[350px]:mr-[15px]"}
            />
          </span>
          <a
            href="/"
            className="text-base max-sm:text-sm hover:scale-125 easi-in duration-300"
          >
            stack
          </a>
          <a
            href="/"
            className="text-base max-sm:text-sm hover:scale-125 easi-in duration-300"
          >
            contact
          </a>
        </nav>
      </header>

      <div className="bg-city-bg w-full max-sm:w-full h-[700px] max-sm:h-[600px] bg-center bg-cover">
        <div>
          <Image
            src="/gray_logo.svg"
            alt="logo_landing_page"
            width={700}
            height={700}
            className={
              "absolute flex justify-center items-center z-0 mt-[100px] ml-[375px] opacity-5 max-sm:invisible"
            }
          />
{/*           <Image
            src="/landing_page_photo.png"
            alt="sabrina_pic"
            width={450}
            height={100}
            className={"absolute z-10 p-12 py-44 ml-20 mt-[-20px]"}
          /> */}
          <pre className="absolute mt-[350px] ml-[50px] max-sm:invisible text-white opacity-10 font-mono text-xs">
            <p>1    <span className="text-pink-200">import React from "react";</span></p>
            <p>2    <span className="text-pink-200">import Image from "next/image";</span></p>
            <p>4    <span className="text-pink-200">export default function <span className="text-blue-300">Main() &#123;</span></span></p>
            <p>5    </p>
            <p>6    <span className="text-blue-200">    return &#40;</span></p>
            <p>7    <span className="text-blue-200">     &lt;div className="w-full h-auto pt-24 mt-[-20px] bg-neutral-400"&gt; &lt;/div &gt; </span> </p>
            <p>8    <span className="text-blue-200">     &lt;h1 className="text-white text-7xl text-center m-28 mt-[-50px] underline"&gt;Stack&lt;/h1&gt; </span></p>
            <p>9    <span className="text-blue-200">      &lt;section className="mb-10"&gt;&lt;/section&gt;</span></p>            
            <p>10    <span className="text-blue-200">       &lt;div className="flex flex-row items-center justify-center"&gt;</span></p>            
            <p>11    <span className="text-blue-200">         &lt;Image</span></p>            
            <p>12    <span className="text-blue-200">            src="/css.png"</span></p>            
            <p>13    <span className="text-blue-200">            alt="css_profile"</span></p>            
            <p>14    <span className="text-blue-200">            width=&#123;90&#125;</span></p>            
            <p>15    <span className="text-blue-200">            height=&#123;90&#125;   </span></p>            
            <p>16    <span className="text-blue-200">            className=&#123;   </span></p>            
            <p>17    <span className="text-blue-200">              "z-10 opacity-95 mr-40 hover:cursor-pointer   </span></p>            
            <p>18    <span className="text-blue-200">              "z-10 opacity-95 mr-40 hover:cursor-pointer   </span></p>            
            <p>19    <span className="text-blue-200">              "z-10 opacity-95 mr-40 hover:cursor-pointer   </span></p>            
            <p>20    </p>            
            <p>21    </p>            
          </pre>
        </div>
        {/* <div className=" w-[480px] h-[240px] bg-rose-800 absolute mt-[285px] ml-[220px] z-0 rounded-tl-full rounded-tr-full scale-x-110"></div> */}
        <div className="absolute text-[90px] max-sm:text-[36px] max-md:text-[60px] ml-[750px] max-[340px]:ml-[60px] mt-[160px] max-sm:mt-[175px] z-0 max-[380px]:ml-[80px] max-[460px]:ml-[115px] max-[412px]:ml-[105px] max-[384px]:ml-[85px] max-[550px]:ml-[160px] max-sm:ml-[230px] max-lg:ml-[440px] max-[900px]:ml-[180px] max-[920px]:ml-[360px] max-[1080px]:ml-[450px] max-xl:ml-[600px] max-[1060px]:ml-[425px] max-[960px]:ml-[400px] max-[1400px]:ml-[655px] max-lg:text-[75px] 2xl:ml-[1150px] ">
          <span className="absolute w-[365px] max-sm:w-[150px] max-md:w-[230px] max-lg:mt-5 max-lg:w-[300px] max-md:h-[70px] max-md:mt-5 h-[100px] max-sm:h-[45px] bg-white mt-8 max-sm:mt-7 -ml-9"></span>
          <span className="absolute w-[365px] max-sm:w-[150px] max-md:w-[230px] max-lg:w-[300px] max-lg:mt-2 max-md:h-[70px]  max-md:mt-3 max-md:ml-6 h-[100px] max-sm:h-[45px] max-sm:mt-5 bg-white mt-5 ml-5"></span>
          <span className="flex">
            <p className="mr-7 max-sm:my-[16px] text-zinc-700 z-10 under animate-wiggle">SABRINA</p>
            <p className="font-bold text-white max-sm:my-[15px] max-[340px]:text-[28px] max-[340px]:mt-[23px] max-sm:mx-[7px]">WEB</p>
          </span>
          <span>
            <div className="flex flex-row">
              <p className="text-white max-sm:my-[-20px]">DEVELOPER</p>
              <div data-aos="fade-right" className="flex flex-row max-sm:mt-4 max-sm:ml-0 max-md:ml-6 max-md:-mt-3 -mt-4 ml-14">
              <a href="https://www.linkedin.com/in/sabrinadelvalle/"><Image
                src="/in.png"
                alt="linkedin_profile"
                width={39}
                height={35}
                className={
                  "z-10 hover:cursor-pointer hover:scale-125 easi-in duration-300"
                }
              /></a>
              <a href="https://github.com/sabrina-delvalle">
              <Image
                src="/github.png"
                alt="github_profile"
                width={22}
                height={22}
                className={
                  "z-10 hover:cursor-pointer hover:scale-125 easi-in duration-300"
                }
              /></a>
              </div>
            </div>
            <Image
              src="/arrow.svg"
              alt="arrow_section"
              width={100}
              height={100}
              className={
                "absolute flex justify-center items-center z-0 animate-bounce w-12 h-12 mt-[150px] ml-[450px] float-right max-lg:invisible"
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
}
