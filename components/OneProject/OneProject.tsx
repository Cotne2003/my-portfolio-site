"use client";

import React, { useState } from "react";
import audiophile from "/public/assets/audophine.png";
import gitLogo from "/public/logos/projectGithub.svg";

const OneProject = () => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="w-[370px] h-[370px] border-[2px] border-[#1c2b3a] border-solid rounded-[15px] bg-[#011221] relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={audiophile.src}
        alt=""
        className="w-full h-[200px] rounded-t-[15px]"
      />
      <div className="p-8 text-xl">
        <h2 className="Caveat uppercase">audiophile ecommerce website</h2>
        <div className="flex justify-between items-center">
          <a href="" target="_blank">
            <button className="Caveat bg-[#1c2b3a] py-2 px-4 mt-5 rounded-md">
              view project
            </button>
          </a>
          <a href="" target="_blank">
            <img src={gitLogo.src} alt="" width={40} className="mt-4" />
          </a>
        </div>
      </div>
      {hover && (
        <div className="flex absolute w-full h-[200px] rounded-t-[15px] left-0 top-0 bg-[#00000056] justify-between items-center px-9">
          <span>as</span>
          <span>as</span>
        </div>
      )}
    </div>
  );
};

export default OneProject;
