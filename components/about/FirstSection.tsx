import React from "react";
import arrow from "/public/logos/arrow.png";
import email from "/public/logos/Email.svg";
import telephone from "/public/logos/telephone.png";

type Props = {
  persHandler: () => void;
  pers: boolean;
  profHandler: () => void;
  prof: boolean;
};

const FirstSection = ({ persHandler, pers, profHandler, prof }: Props) => {
  return (
    <section className="">
      <div className="">
        <div className=" w-[170px]">
          <h2 className="text-5xl">about-me</h2>
        </div>
        <div className="mt-[20px]">
          <div className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1">
            <span>
              <img src={arrow.src} width={10} alt="" />
            </span>{" "}
            Info
          </div>
          <div className="mt-3">
            <div
              className={`pl-5 flex items-center gap-3 Caveat uppercase py-1 ${
                pers ? "bg-[#5e5e5e7a]" : ""
              } rounded-lg cursor-pointer`}
              onClick={persHandler}
            >
              <span>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              personal
            </div>
            <div
              className={`pl-5 flex items-center gap-3 Caveat uppercase py-1 cursor-pointer rounded-lg ${
                prof ? "bg-[#5e5e5e7a]" : ""
              }`}
              onClick={profHandler}
            >
              <span>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              proffesional
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mt-[20px]">
          <div className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1">
            <span>
              <img src={arrow.src} width={10} alt="" />
            </span>{" "}
            contacts
          </div>
          <div className="mt-3">
            <div className="pl-5 flex gap-3 items-center font-sans py-1">
              <span>
                <img src={email.src} width={15} alt="" />
              </span>
              basiashvilic@gmail.com
            </div>
            <div className="pl-5 flex gap-3 items-center font-sans py-1">
              <span>
                <img src={telephone.src} width={15} alt="" />
              </span>
              +(995) 568 864 004
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
