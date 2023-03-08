import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <div className="w-full h-auto pt-24 mt-[-20px] bg-neutral-400">
      <h1 className="text-white text-7xl text-center m-28 mt-[-50px] underline">Stack</h1>
      <section className="mb-10">
        <div className="flex flex-row items-center justify-center">
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
        <div className="flex flex-row items-center justify-center pt-16 ml-20">
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
        <div className="flex flex-row items-center justify-center pt-16 ml-20">
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
      <section className="h-[800px] w-full bg-neutral-500">

      </section>
    </div>
  );
}
