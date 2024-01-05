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

  const [response, setResponse] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000, mirror: true });
    console.log(formData);
  }, [formData])

  const sendForm = (event) => {
    setResponse(true);
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
          setFormData({
            name: "",
            email: "",
            message: ""
          })
          setIsDone(true)
          setResponse(false)
        //this.props.navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
    postContact();
  }

  return (
    <div id="stack" className="w-full h-auto bg-neutral-400 max-sm:overflow-hidden overflow-hidden">
      
      <div>
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
      </div>
      
      <section id="projects" className="w-full bg-neutral-700 flex items-center justify-center flex-col p-20">
      <h1 data-aos="fade-left" className="text-white text-5xl font-light pt-20 pb-14 underline">Projects</h1>
              <a href="https://dreamblog.onrender.com/">
        <div data-aos="fade-right" className="flex flex-col items-center gap-10 p-20 max-sm:p-0 bg-stone-800 hover:bg-stone-800/70 max-sm:bg-stone-800 m-10 max-sm:m-3 rounded-[5rem]">
          <h1 data-aos="fade-right" className="flex items-center justify-center text-white text-5xl font-thin max-sm:mt-10">Blog <svg className="w-8 h-8 mx-3 text-pink-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
          </svg></h1>
                <Image
                  src="/blog2.png"
                  alt="blog"
                  width={1000}
                  height={1000}
                  className={
                    "border-slate-700 border-[3px] z-10 ml-6 max-sm:ml-5 max-sm:mr-[85px] max-sm:mt-[10px] hover:cursor-pointer max-md:mr-9 rounded-3xl hover:opacity-90 hover:border-sky-600 hover:border-[2px]"
                  }
                />
        </div>
              </a>
              <a href="https://mystoreship.netlify.app/">
        <div data-aos="fade-left" className="flex flex-col items-center gap-10 p-20 max-sm:p-0 bg-slate-800/90 hover:bg-slate-800/70 max-sm:bg-stone-800 hover:cursor-pointer hover:bg-slate-800 m-10 max-sm:m-3 rounded-[5rem]">
          <h1 data-aos="fade-left" className="flex items-center justify-center text-white text-5xl font-thin max-sm:text-white max-sm:mt-10">Store <svg className="w-8 h-8 mx-3 text-pink-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
          </svg>
          </h1>
                <Image
                  src="/store3.png"
                  alt="store"
                  width={1000}
                  height={1000}
                  className={
                    " border-pink-400/80 border-[1px] z-10 ml-6 max-sm:ml-6 max-sm:mr-[85px] max-sm:mt-[10px] hover:cursor-pointer max-md:mr-9 rounded-3xl hover:opacity-90 hover:border-pink-500 hover:border-[2px]"
                  }
                />
        </div>
              </a>

        {/* <h1 data-aos="fade-left" className="text-white text-9xl max-sm:text-5xl">Projects</h1>
        <a data-aos="fade-right" href="https://dreamblog.onrender.com/"><h3 className="text-2xl ml-4 text-pink-400 max-sm:text-1xl p-20">Blog Project Link <p className="text-white text-4xl max-sm:text-2xl p-10 hover:text-pink-500"> 🔗 dreamblog.onrender.com</p></h3></a>
        <a data-aos="fade-left" href="https://mystoreship.netlify.app/"><h3 className="text-2xl ml-4 text-pink-400 max-sm:text-1xl p-20">Blog Project Link <p className="text-white text-4xl max-sm:text-2xl p-10 hover:text-pink-500"> 🔗 mystoreship.netlify.app/</p></h3></a> */}
      </section>
      <section id="contact" data-aos="fade-right" className="h-screen w-full bg-neutral-600 flex flex-col items-center justify-center overflow-hidden">
        <h1 data-aos="zoom-in" className=" text-3xl max-sm:text-3xl pb-10 text-pink-400">Contact Me!</h1>
        <form onSubmit={sendForm} action="/contact" className="flex flex-col items-center justify-center gap-4">
          <input type="text" id="fname" name="fname" className="p-1 rounded-lg text-center text-gray-500 max-sm:w-2/3 w-3/5" placeholder="Name / Lastname" onChange={e => { const targetName =  e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1); setFormData({...formData, name: targetName}) }} value={ formData.name } />
          <input type="email" id="userEmail" name="userEmail" className="p-1 rounded-lg text-center text-gray-500 max-sm:w-2/3 w-3/5" placeholder="Email" onChange={e => {setFormData({...formData, email: e.target.value})}} value={ formData.email }/>
          <textarea rows="3" cols="50" id="fmessage" name="fmessage" className="flex p-2 rounded-lg text-gray-500 max-sm:w-2/3 w-3/3" placeholder="Message" onChange={e => { const targetMessage =  e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1); setFormData({...formData, message: targetMessage}) }} value={ formData.message }  />
            { Object.values(formData).every(elem => elem !== '') ? 
              (response ? <input
                type="submit"
                value="Submit"
                className="w-20 h-10 bg-neutral-800 text-white p-1 rounded-lg hover:bg-neutral-700 cursor-wait"
              />  : <input
              type="submit"
              value="Submit"
              className="w-20 h-10 bg-neutral-800 text-white p-1 rounded-lg hover:bg-neutral-700 cursor-pointer"
            /> )
               : (isDone ? <input
                type="submit"
                value="Done"
                className="w-20 h-10 bg-gray-100 text-gray-300 p-1 rounded-lg hover:bg-gray-100 cursor-none"
              /> : <input
              type="submit"
              value="Fill Me"
              className="w-20 h-10 bg-gray-100 text-gray-300 p-1 rounded-lg hover:bg-gray-100 cursor-none"
            />)}
          </form>
      </section>
      <footer data-aos="fade-right" className="h-screen w-full bg-neutral-800 flex items-center justify-center">
        <div className="flex flex-col align-middle items-center text-white float-left text-4xl">
          <p className="p-10 max-sm:text-2xl"> Sabrina del Valle</p>
          <p className="text-xs">Web Developer - Caracas, Ven. 1020</p>
          <p className="text-xs">is.sabrinadelvalle@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}