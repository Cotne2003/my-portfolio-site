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

const HomePage = () => {
  const forImg = "w-[10.5%]";
  return (
    <main className="flex justify-between">
      <section className="pl-[8%] pt-[10%] text-center w-1/2">
        <h2 className="text-5xl text-[#B336FF]">SKILLS</h2>
        <div className="flex flex-wrap justify-evenly gap-x-[15%] gap-y-[40px] mt-20">
          <img src={html.src} alt="" className={`${forImg}`} />
          <img src={css.src} alt="" className={`${forImg}`} />
          <img src={tailwind.src} alt="" className={`${forImg}`} />
          <img src={react.src} alt="" className={`${forImg}`} />
          <img src={styledComp.src} alt="" className={`${forImg}`} />
          <img src={js.src} alt="" className={`${forImg}`} />
          <img src={typescript.src} alt="" className={`${forImg}`} />
          <img src={next.src} alt="" className={`${forImg}`} />
          <img src={git.src} alt="" className={`${forImg}`} />
          <img src={api.src} alt="" className={`${forImg}`} />
        </div>
      </section>
      <section className="flex flex-col justify-between text-right p-[8%] pt-[13%] h-[100vh]">
        <div className="flex flex-col gap-1">
          <p className="font-light leading-6 Caveat text-7xl mb-8">"HELLO"</p>
          <h1 className="font-light text-[4vw] text-[#B336FF]">
            <span className="text-white">i am </span>Cotne Basiashvili
          </h1>
          <h2 className="text-xl font-normal w-[696px]">
            <span className="text-[#e99287]">Front-end web developer. </span>As
            a developer my motivation and confidence are fueled by my ability to
            write simple yet highly effective code. I am driven by a passion for
            creating visually stunning and seamless user experiences, and my
            commitment to simplicity ensures that my code is not only efficient
            but also easy to understand.
          </h2>
        </div>
        <div>
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
        </div>
      </section>
    </main>
  );
};

export default HomePage;
