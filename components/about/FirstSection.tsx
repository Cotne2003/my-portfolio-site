import React, { MouseEventHandler, useState } from "react";
import arrow from "/public/logos/arrow.png";
import email from "/public/logos/Email.svg";
import telephone from "/public/logos/telephone.png";

type Props = {
  persHandler: MouseEventHandler<HTMLDivElement>;
  pers: boolean;
  profHandler: () => void;
  prof: boolean;
};

const FirstSection = ({ persHandler, pers, profHandler, prof }: Props) => {
  const [info, setInfo] = useState(true);
  const [contacts, setContacts] = useState(false);
  const infoHandler = () => {
    setInfo(!info);
  };
  const contactsHandler = () => {
    setContacts(!contacts);
  };
  console.log("test");
  return (
    <section className="w-[220px]">
      <h2 className="text-5xl">about-me</h2>
      <div className="mt-[40px]">
        <div
          className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
          onClick={infoHandler}
        >
          <span className={`${info ? "rotate-90" : "rotate-0"}`}>
            <img src={arrow.src} width={10} alt="" />
          </span>{" "}
          Info
        </div>
        {info && (
          <div className="mt-3">
            <div
              className={`pl-5 flex items-center gap-3 Caveat uppercase py-1 ${
                pers ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
              } rounded-lg cursor-pointer`}
              onClick={persHandler}
            >
              <span className={`${pers ? "rotate-90" : "rotate-0"}`}>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              personal
            </div>
            <div
              className={`pl-5 flex items-center gap-3 Caveat uppercase py-1 cursor-pointer rounded-lg mt-1 ${
                prof ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
              }`}
              onClick={profHandler}
            >
              <span className={`${prof ? "rotate-90" : "rotate-0"}`}>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              proffesional
            </div>
          </div>
        )}
      </div>

      <div className="mt-[20px]">
        <div
          className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
          onClick={contactsHandler}
        >
          <span className={`${contacts ? "rotate-90" : "rotate-0"}`}>
            <img src={arrow.src} width={10} alt="" />
          </span>{" "}
          contacts
        </div>
        {contacts && (
          <div className="mt-3">
            <div className="pl-5 flex gap-3 items-center font-sans py-1 hover:opacity-50 cursor-pointer">
              <span>
                <img src={email.src} width={15} alt="" />
              </span>
              basiashvilic@gmail.com
            </div>
            <div className="pl-5 flex gap-3 items-center font-sans py-1 hover:opacity-50 cursor-pointer">
              <span>
                <img src={telephone.src} width={15} alt="" />
              </span>
              +(995) 568 864 004
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstSection;
