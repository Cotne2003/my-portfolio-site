"use client";
import { useState } from "react";
import ContactsList from "../about/ContactsList";
import arrow from "/public/logos/arrow.png";
import link from "/public/logos/link.png";
import Form from "./Form";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const [also, setAlso] = useState(false);
  const alsoHandler = () => {
    setAlso(!also);
  };

  return (
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[5%] max-lg:px-[5%] max-lg:pt-[120px] max-md:pt-[100px]">
      <section className="w-[220px] relative max-lg:w-full">
        <h2 className="text-5xl max-lg:text-4xl">contact-me</h2>

        <div className="mt-[40px]  max-lg:mt-[20px]">
          <div className="mt-[20px]">
            <div
              className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer  max-lg:text-xl"
              onClick={alsoHandler}
            >
              <span className={`${also ? "rotate-90" : "rotate-0"}`}>
                <Image src={arrow} width={10} alt="" />
              </span>{" "}
              find me in
            </div>
          </div>
          <AnimatePresence>
            {also && (
              <motion.div
                className="mt-3 max-lg:mt-2"
                initial={{ opacity: 0, scaleY: 0, originY: 0 }}
                animate={{ opacity: 1, scaleY: 1, y: 0 }}
                exit={{ opacity: 0, scaleY: 0, originY: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer max-lg:text-sm">
                  <span>
                    <Image src={link} width={15} alt="" />
                  </span>
                  <a
                    href="https://www.instagram.com/bassiashvili_cotnee/"
                    target="_blank"
                    className="font-sans"
                  >
                    Instagram
                  </a>
                </div>
                <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer max-lg:text-sm">
                  <span>
                    <Image src={link} width={15} alt="" />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/cotne-basiashvili-23a532282/"
                    target="_blank"
                    className="font-sans"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer max-lg:text-sm">
                  <span>
                    <Image src={link} width={15} alt="" />
                  </span>
                  <a
                    href="https://www.facebook.com/TsotneBasiashvili"
                    target="_blank"
                    className="font-sans"
                  >
                    Facebook
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={also ? { y: 100 } : {}}
          className="absolute w-full top-[130px] max-lg:hidden"
        >
          <ContactsList />
        </motion.div>
      </section>
      <motion.div
        className="max-lg:absolute max-lg:top-[240px] max-lg:left-0 max-lg:pl-[5%] max-md:top-[210px] max-lg:w-[100%]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        animate={also ? { y: "var(--y-contact)" } : {}}
      >
        <Form />
      </motion.div>
    </main>
  );
};

export default ContactPage;
