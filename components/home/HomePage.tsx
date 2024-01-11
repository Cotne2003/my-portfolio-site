import React from "react";
import inst from "/public/logos/Inst.svg";
import linkedin from "/public/logos/Linkedin.svg";
import github from "/public/logos/Github.svg";

const HomePage = () => {
  return (
    <main className="">
      <section className="flex flex-col justify-between text-right items-end p-[8%] pt-[13%] h-[100vh]">
        <div className="flex flex-col gap-1">
          <p className="font-light leading-6 Caveat text-7xl mb-8">"HELLO"</p>
          <h1 className="font-light text-8xl text-[#B336FF]">
            <span className="text-white">i am </span>Cotne Basiashvili
          </h1>
          <h2 className="text-xl font-normal w-[696px]">
            Front-end web developer. As a developer my motivation and confidence
            are fueled by my ability to write simple yet highly effective code.
            I am driven by a passion for creating visually stunning and seamless
            user experiences, and my commitment to simplicity ensures that my
            code is not only efficient but also easy to understand.
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
