"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const From = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pja8d8",
        "template_6skz3qm",
        form.current,
        "3d2k54D5d9B19ysmg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <motion.section
      className="w-[770px] mt-[65px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96]">Name</label>
            <input
              type="text"
              name="user_name"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md outline-none focus:border font-sans pl-[15px] py-[10px] focus:border-[#48627e]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96]">Email</label>
            <input
              type="email"
              name="user_email"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md font-sans pl-[15px] py-[10px] focus:border-[#48627e] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96]">Message</label>
            <textarea
              name="message"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md font-sans pl-[15px] h-[200px] py-[10px] focus:border-[#48627e] outline-none"
            />
          </div>
          <button
            type="submit"
            className="font-sans bg-[#1e2d3d] w-[100px] rounded-md py-2"
          >
            send
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default From;
