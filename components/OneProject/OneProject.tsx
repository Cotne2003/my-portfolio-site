"use client";

import React, { useState } from "react";
import gitLogo from "/public/logos/projectGithub.svg";
import reactLogo from "/public/logos/reactLogo.webp";
import typescriptLogo from "/public/logos/typescript.webp";
import styledCompLogo from "/public/logos/styled-components.webp";
import nextLogo from "@/public/logos/next.svg";

type Props = {
  codeLink: string;
  imgSrc: string;
  liveLink: string;
  title: string;
  tools: string[];
};

const OneProject = ({ codeLink, imgSrc, liveLink, title, tools }: Props) => {
  console.log(imgSrc);
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[370px] h-[370px] border-[2px] border-[#1c2b3a] border-solid rounded-[15px] bg-[#011221] relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imgSrc} alt="" className="w-full h-[200px] rounded-t-[15px]" />
      <div className="p-8 text-xl">
        <h2 className="Caveat uppercase">{title}</h2>
        <div className="flex justify-between items-center">
          <a href={liveLink} target="_blank">
            <button className="Caveat bg-[#1c2b3a] py-2 px-4 mt-5 rounded-md">
              view project
            </button>
          </a>
          <a href={codeLink} target="_blank">
            <img src={gitLogo.src} alt="" width={40} className="mt-4" />
          </a>
        </div>
      </div>
      {hover && (
        <div className="flex absolute w-full h-[200px] rounded-t-[15px] left-0 top-0 bg-[#000000af] justify-between items-center px-9">
          <span>
            <img src={nextLogo.src} width={35} alt="" />
          </span>
          <span>
            <img src={typescriptLogo.src} width={35} alt="" />
          </span>
          <span>
            <img src={styledCompLogo.src} width={35} alt="" />
          </span>
        </div>
      )}
    </div>
  );
};

export default OneProject;
