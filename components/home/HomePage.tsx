"use client";
import React from "react";
import inst from "/public/logos/Inst.svg";
import linkedin from "/public/logos/Linkedin.svg";
import github from "/public/logos/Github.svg";
import html from "/public/logos/html.webp";
import css from "/public/logos/css-3.webp";
import tailwind from "/public/logos/tailwind.webp";
import react from "/public/logos/reactLogo.webp";
import styledComp from "/public/logos/styled-components.webp";
import js from "/public/logos/js.webp";
import typescript from "/public/logos/typescript.webp";
import next from "/public/logos/next.svg";
import git from "/public/logos/git.webp";
import api from "/public/logos/icons8-rest-api-96.webp";
import { motion } from "framer-motion";

const HomePage = () => {
  const forImg = "w-[10.5%]";
  const forWirdth = "asd";
  return (
    <main className="flex justify-between">
      <motion.section
        className="pl-[8%] pt-[10%] text-center w-1/2"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl text-[#B336FF]">SKILLS</h2>
        <div className="flex flex-wrap justify-evenly gap-x-[15%] gap-y-[40px] mt-20">
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
            }}
            src={html.src}
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={css.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={tailwind.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={react.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={styledComp.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={js.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={typescript.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={next.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={git.src}
            alt=""
            className={`${forImg}`}
          />
          <motion.img
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
            }}
            src={api.src}
            alt=""
            className={`${forImg}`}
          />
        </div>
      </motion.section>
      <section className="flex flex-col justify-between text-right p-[8%] pt-[13%] h-[100vh]">
        <div className="flex flex-col gap-1">
          <motion.p
            className="font-light leading-6 Caveat text-7xl mb-8"
            initial={{ x: 300, y: 50, opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
          >
            "HELLO"
          </motion.p>
          <motion.h1
            className="font-light text-[4vw] text-[#B336FF]"
            initial={{ x: 300, opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-white">i am </span>Cotne Basiashvili
          </motion.h1>
          <motion.h2
            className="text-xl font-normal w-[696px]"
            initial={{ x: 300, opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#e99287]">Front-end web developer. </span>As
            a developer my motivation and confidence are fueled by my ability to
            write simple yet highly effective code. I am driven by a passion for
            creating visually stunning and seamless user experiences, and my
            commitment to simplicity ensures that my code is not only efficient
            but also easy to understand.
          </motion.h2>
        </div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-normal text-[#607b96]">
            find my profile on Github:
          </p>
          <h3 className="text-2xl text-[#43d9ad]">
            github link <span className="text-white">=</span>{" "}
            <a
              href="https://github.com/Cotne2003"
              target="_blank"
              className="underline text-2xl text-[#e99287]"
            >
              https://github.com/Cotne2003
            </a>
          </h3>
          <div className="flex justify-end gap-7 mt-6 items-center">
            <a
              href="https://www.instagram.com/bassiashvili_cotnee/"
              target="_blank"
            >
              <img src={inst.src} alt="" className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/cotne-basiashvili-23a532282/"
              target="_blank"
            >
              <img src={linkedin.src} alt="" className="cursor-pointer" />
            </a>
            <a href="https://github.com/Cotne2003" target="_blank">
              <img src={github.src} alt="" className="cursor-pointer" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
