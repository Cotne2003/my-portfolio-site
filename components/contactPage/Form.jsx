"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const From = () => {
  const form = useRef();

  const [wait, setWait] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setWait(true);

    emailjs
      .sendForm(
        "service_3pja8d8",
        "template_6skz3qm",
        form.current,
        "3d2k54D5d9B19ysmg"
      )
      .then(
        (result) => {
          console.log(result);
          setWait(false);
          if (result.status === 200) {
            toast.success("Message sent successfully");
          } else {
            toast.error("Unexpected error occurred while sending message");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.section className="w-[770px] mt-[65px] max-lg:w-[95%] max-[1260px]:w-[600px] max-lg:mt-[0]">
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 max-lg:gap-2"
        >
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96] max-lg:text-sm">
              Name
            </label>
            <input
              required={true}
              autoComplete="off"
              type="text"
              name="user_name"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md outline-none focus:border font-sans pl-[15px] py-[10px] focus:border-[#48627e]"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96] max-lg:text-sm">
              Email
            </label>
            <input
              type="email"
              autoComplete="off"
              required={true}
              name="user_email"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md font-sans pl-[15px] py-[10px] focus:border-[#48627e] outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-[#607b96] max-lg:text-sm">
              Message
            </label>
            <textarea
              required={true}
              name="message"
              className="bg-[#011221] border-solid border-[#1e2d3d] border-[1px] rounded-md font-sans pl-[15px] h-[200px] py-[10px] focus:border-[#48627e] outline-none"
            />
          </div>
          <button
            type="submit"
            className="font-sans bg-[#1e2d3d] w-[100px] rounded-md py-2 uppercase font-medium hover:scale-105 ease-out duration-300 active:scale-95"
          >
            {wait ? "wait" : "send"}
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default From;
