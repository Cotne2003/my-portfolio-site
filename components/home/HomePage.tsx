"use client";
import { motion } from "framer-motion";
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
import Image from "next/image";
import { CSSProperties } from "react";

const skills = [
  html,
  css,
  tailwind,
  react,
  styledComp,
  js,
  typescript,
  next,
  git,
  api,
];

const HomePage = () => {
  const motionCommon = {
    transition: { repeat: Infinity, duration: 4 },
    animate: { scale: [0.9, 1.2, 0.9] },
  };

  return (
    <main className="flex justify-between max-md:h-[100vh] overflow-hidden">
      <motion.section
        className="pl-[8%] pt-[10%] text-center w-1/2 2xl:w-1/3 2xl:ml-[40px] max-[1439px]:w-2/5 max-md:hidden max-xl:pt-[140px] max-xl:pl-[5%]"
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 3 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl text-[#B336FF] max-[1440px]:text-[40px] max-xl:text-3xl">
          SKILLS
        </h2>
        <div className="flex flex-wrap justify-evenly gap-x-[15%] gap-y-[40px] mt-20 2xl:gap-y-[70px] max-xl:mt-10">
          {skills.map((skill, index) => (
            <motion.img
              key={index}
              {...motionCommon}
              src={skill.src}
              className="w-[10.5%] 2xl:w-[50px] max-md:w-[40px]"
            />
          ))}
        </div>
      </motion.section>

      <section className="flex flex-col justify-between text-right p-[8%] pt-[13%] h-[100vh] max-[1439px]:p-[5%] max-[1439px]:pt-[13%] max-md:text-left max-md:p-0 max-md:pt-[120px] max-md:h-full max-xl:pt-[150px]">
        <div className="flex flex-col gap-1 max-md:px-[5%] max-md:gap-0">
          <motion.p
            className="font-light leading-6 Caveat text-7xl mb-8 max-[1440px]:text-[50px] max-[1439px]:mb-3"
            initial={{ x: "var(--x)", y: 50, opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={
              {
                "--x": 300,
              } as CSSProperties
            }
          >
            &quot;HELLO&quot;
          </motion.p>
          <motion.h1
            className="font-light text-[4vw] text-[#B336FF] max-[1439px]:text-[40px]"
            initial={{ x: "var(--x)", opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ x: 0, opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            style={
              {
                "--x": 300,
              } as CSSProperties
            }
          >
            <span className="text-white">i am </span>Tsotne Basiashvili
          </motion.h1>
          <motion.h2
            className="text-xl font-normal w-[696px] max-[1439px]:text-base max-[1439px]:w-[500px] max-md:w-full max-lg:w-[400px]"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#e99287]">Front-end web developer. </span>
            As a developer my motivation and confidence are fueled by my ability
            to write simple yet highly effective code. I am driven by a passion
            for creating visually stunning and seamless user experiences, and my
            commitment to simplicity ensures that my code is not only efficient
            but also easy to understand.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-end max-md:px-[5%] max-md:items-start max-md:absolute bottom-10"
        >
          <p className="font-normal text-[#607b96]">
            find my profile on Github:
          </p>
          <h3 className="text-2xl text-[#43d9ad] ease-out duration-300 hover:scale-110 active:scale-90 active:opacity-35 max-md:text-xl">
            github link <span className="text-white">=</span>{" "}
            <a
              href="https://github.com/Cotne2003"
              target="_blank"
              className="underline text-2xl text-[#e99287] max-md:text-xl"
            >
              https://github.com/Cotne2003
            </a>
          </h3>
          <div className="flex justify-end gap-7 mt-6 items-center">
            <a
              href="https://www.instagram.com/bassiashvili_tsotnee/"
              target="_blank"
            >
              <Image
                src={inst}
                alt=""
                className="cursor-pointer ease-out duration-300 hover:scale-150 active:scale-90"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tsotne-basiashvili-23a532282/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt=""
                className="cursor-pointer ease-out duration-300 hover:scale-150 active:scale-90"
              />
            </a>
            <a href="https://github.com/Cotne2003" target="_blank">
              <Image
                src={github}
                alt=""
                className="cursor-pointer ease-out duration-300 hover:scale-150 active:scale-90"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default HomePage;
