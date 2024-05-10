"use client";

import { useEffect, useState } from "react";
import gitLogo from "/public/logos/projectGithub.svg";
import reactLogo from "/public/logos/reactLogo.webp";
import typescriptLogo from "/public/logos/typescript.webp";
import jsLogo from "/public/logos/js.webp";
import styledCompLogo from "/public/logos/styled-components.webp";
import mongoLogo from "/public/logos/mongo.webp";
import nextLogo from "@/public/logos/next.svg";
import tailwindLogo from "/public/logos/tailwind.webp";
import restApiLogo from "/public/logos/icons8-rest-api-96.webp";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  codeLink: string;
  imgSrc: string;
  liveLink: string;
  title: string;
  tools: string[];
};

const OneProject = ({ codeLink, imgSrc, liveLink, title, tools }: Props) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    tools.map((tool) => {
      if (tool === "react") {
        setReact(true);
      }
      if (tool === "next") {
        setNext(true);
      }
      if (tool === "typescript") {
        setTpscript(true);
      }
      if (tool === "javascript") {
        setJs(true);
      }
      if (tool === "styled-components") {
        setStlComp(true);
      }
      if (tool === "tailwind") {
        setTail(true);
      }
      if (tool === "API") {
        setRestAp(true);
      }
      if (tool === "mongo") {
        setMongo(true);
      }
    });
  }, [tools]);

  const [next, setNext] = useState(false);
  const [react, setReact] = useState(false);
  const [tpscript, setTpscript] = useState(false);
  const [js, setJs] = useState(false);
  const [stlComp, setStlComp] = useState(false);
  const [tail, setTail] = useState(false);
  const [restAp, setRestAp] = useState(false);
  const [mongo, setMongo] = useState(false);

  return (
    <motion.div
      className="w-[370px] h-[370px] border-[2px] border-[#1c2b3a] border-solid rounded-[15px] bg-[#011221] relative max-[1275px]:w-[300px] max-[1275px]:h-[300px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={imgSrc}
        width={400}
        height={200}
        alt=""
        className="w-full h-[200px] max-[1275px]:h-[180px] rounded-t-[15px]"
      />
      <div className="p-8 text-xl max-[1275px]:pt-5 max-[1275px]:px-5 max-[1275px]:pb-0">
        <h2 className="Caveat uppercase max-[1275px]:text-sm">{title}</h2>
        <div className="flex justify-between items-center max-[1275px]:mt-4">
          <a href={liveLink} target="_blank">
            <button className="Caveat bg-[#1c2b3a] py-2 px-4 mt-5 rounded-md max-[1275px]:text-sm max-[1275px]:mt-0 hover:scale-[1.1] ease-in-out duration-300">
              view project
            </button>
          </a>
          <a href={codeLink} target="_blank">
            <Image
              src={gitLogo}
              alt=""
              width={40}
              className="mt-4 max-[1275px]:mt-0 hover:scale-[1.3] ease-in-out duration-300"
            />
          </a>
        </div>
      </div>
      {hover && (
        <div className="flex absolute w-full h-[200px] max-[1275px]:h-[180px] rounded-t-[15px] left-0 top-0 bg-[#000000af] justify-evenly items-center">
          {next && (
            <span>
              <Image src={nextLogo} width={35} alt="" />
            </span>
          )}
          {react && (
            <span>
              <Image src={reactLogo} width={35} alt="" />
            </span>
          )}
          {tpscript && (
            <span>
              <Image src={typescriptLogo} width={35} alt="" />
            </span>
          )}
          {js && (
            <span>
              <Image src={jsLogo} width={35} alt="" />
            </span>
          )}
          {stlComp && (
            <span>
              <Image src={styledCompLogo} width={35} alt="" />
            </span>
          )}
          {tail && (
            <span>
              <Image src={tailwindLogo} width={35} alt="" />
            </span>
          )}
          {restAp && (
            <span>
              <Image src={restApiLogo} width={35} alt="" />
            </span>
          )}
          {mongo && (
            <span>
              <Image src={mongoLogo} width={35} alt="" />
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default OneProject;
