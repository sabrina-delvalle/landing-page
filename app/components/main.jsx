"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css"
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Main() {

/*   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage ] = useState(""); */

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  useEffect(() => {
    Aos.init({ duration: 2000, mirror: true });
    console.log(formData);
  }, [formData])

  const sendForm = (event) => {
    event.preventDefault();

/*     const formDataContact = new FormData();
    formDataContact.append("name", formData.name);
    formDataContact.append("email", formData.email);
    formDataContact.append("messsage", formData.message); */

    const postContact = async () => {
      try {
        const awaitRegister = await axios.post(`${process.env.NEXT_PUBLIC_DB_API}/api/v1/contact`, formData,
          {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          }})
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err));
        console.log(awaitRegister);
        //this.props.navigate("/");
      } catch (err) {
        console.log(err);
      }
    };
    postContact();
  }

  return (
    <div className="w-full h-auto bg-neutral-400 max-sm:overflow-hidden overflow-hidden">
      
      {/* Scroll Effect */}
      <h1 data-aos="fade-left" className="text-white text-7xl max-sm:text-5xl text-center my-20">
        Stack
      </h1>
      {/* Scroll Effect */}

      <section className="mb-10">
        <div data-aos="fade-left" className="flex flex-row items-center justify-center max-sm:flex-col max-sm:my-[35px]">
          <Image
            src="/css.png"
            alt="css_profile"
            width={90}
            height={90}
            className={
              "z-10 opacity-95 mr-40 max-sm:mr-0 hover:cursor-pointer hover:scale-125 easi-in duration-300 max-sm:p-2"
            }
          />
          <Image
            src="/html.png"
            alt="html"
            width={90}
            height={90}
            className={
              "z-10 opacity-95 mr-36 max-sm:mr-[-13px] max-sm:mt-[13px] mb-16 max-sm:mb-0 hover:cursor-pointer hover:scale-125 easi-in duration-300 max-sm:p-2  max-lg:p-1"
            }
          />
          <Image
            src="/js1.png"
            alt="js_profile"
            width={95}
            height={0}
            className={
              "z-10 opacity-95 ml-2 mt-4 hover:cursor-pointer max-sm:mt-[23px] hover:scale-125 easi-in duration-300 max-sm:p-2"
            }
          />
        </div>
        <div data-aos="fade-right" className="flex flex-row items-center justify-center pt-16 ml-20 max-sm:flex-col">
          <Image
            src="/express.png"
            alt="express"
            width={200}
            height={200}
            className={
              "z-10 opacity-95 mr-24 hover:cursor-pointer hover:scale-125 easi-in duration-300 max-sm:mr-16 max-md:-mr-3 /* max-lg:-mr-3 */ max-lg:-ml-10 max-md:-ml-10"
            }
          />
          <Image
            src="/tail.png"
            alt="tailwind"
            width={200}
            height={200}
            className={
              "z-10 opacity-95 ml-8 max-sm:ml-[-85px] max-sm:mt-[30px] max-sm:mr-0 mr-44 hover:cursor-pointer hover:scale-125 easi-in duration-300  max-lg:-mr-3"
            }
          />
          <Image
            src="/next.png"
            alt="next"
            width={220}
            height={220}
            className={
              "z-10 opacity-95 max-sm:ml-[-65px] hover:cursor-pointer hover:scale-125 easi-in duration-300 max-lg:ml-9"
            }
          />
        </div>
        <div data-aos="fade-left" className="flex flex-row items-center justify-center pt-16 max-sm:pt-16 ml-20 gap-[-30px] max-sm:flex-col">
          <Image
            src="/nodej.png"
            alt="nodejs_profile"
            width={130}
            height={130}
            className={
              "z-10 opacity-95 mr-24 max-sm:mr-[75px] max-sm:pb-3 hover:cursor-pointer hover:scale-125 easi-in duration-300"
            }
          />
          <Image
            src="/react.png"
            alt="react"
            width={100}
            height={100}
            className={
              "z-10 opacity-95 max-sm:mr-[85px] max-sm:mt-[10px] ml-4 mr-16 mt-20 hover:cursor-pointer hover:scale-125 easi-in duration-300 max-[710px]:ml-3 max-sm:pb-3"
            }
          />
          <Image
            src="/mongo.png"
            alt="mongoDB"
            width={220}
            height={220}
            className={
              "z-10 opacity-95 ml-6 max-sm:mr-[85px] max-sm:mt-[10px] hover:cursor-pointer hover:scale-125 easi-in duration-300 max-md:mr-9"
            }
          />
        </div>
      </section>
      <section data-aos="fade-right" className="h-[800px] w-full bg-neutral-500 flex flex-col items-center justify-center overflow-hidden">
        <h1 data-aos="zoom-in" className="text-white text-3xl max-sm:text-5xl pb-10">Contact Me!</h1>
        <form onSubmit={sendForm} action="/contact" className="flex flex-col items-center justify-center gap-4">

          <input type="text" id="fname" name="fname" placeholder="Name / Lastname" onChange={e => { const targetName =  e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
	        setFormData({...formData, name: targetName}) }}  value={ formData.name } />

          <input type="email" id="userEmail" name="userEmail" placeholder="Email" onChange={e => {setFormData({...formData, email: e.target.value})}} />

          <textarea rows="3" cols="50" id="fmessage" name="fmessage" placeholder="Message" onChange={e => { const targetMessage =  e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
	        setFormData({...formData, message: targetMessage}) }} value={ formData.message }  />
          
          <input
            type="submit"
            value="Submit"
            className="w-20 h-10 bg-slate-700 text-white"
          />
        </form>
      </section>
      <section  data-aos="fade-left" className="h-[800px] w-full bg-pink-500 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-white text-9xl max-sm:text-5xl">Projects</h1>
        <a href='https://dreamblog.onrender.com/'>https://dreamblog.onrender.com/</a>
      </section>
      <footer data-aos="fade-right" className="h-[800px] w-full bg-gray-800 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-white text-9xl max-sm:text-5xl">Footer</h1>
      </footer>
    </div>
  );
}
