"use client";

import { useEffect, useState } from "react";
import arrow from "/public/logos/arrow.png";
import OneProject from "../OneProject/OneProject";
import { Data, dataProps } from "@/_data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ProjectsPage = () => {
  useEffect(() => {
    setData(Data);
  }, []);

  const [data, setData] = useState<dataProps[]>([]);
  const [all, setAll] = useState(true);

  const [tech, setTech] = useState(true);
  const techHandler = () => {
    setTech(!tech);
  };

  const filteredData = (tool: string) => {
    setAll(false);
    const newData = Data;
    setData(() => newData.filter((project) => project.tools.includes(tool)));
  };

  const allData = () => {
    setAll(true);
    setData(Data);
  };

  return (
    <main className="flex pl-[8%] pt-[150px] gap-[50px] bg-[#010c15] pb-[5%] h-[100vh]">
      <section className="min-w-[250px]">
        <h2 className="text-5xl">projects</h2>
        <div className="mt-[40px]">
          <div
            className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
            onClick={techHandler}
          >
            <span className={`${tech ? "rotate-90" : "rotate-0"}`}>
              <Image src={arrow} width={10} alt="" />
            </span>{" "}
            tech stacks
          </div>
        </div>
        <AnimatePresence>
          {tech && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0, originY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-1"
                    type="radio"
                    checked={all ? true : false}
                    onChange={allData}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-1">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans" id="tt">
                  All
                </label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-2"
                    type="radio"
                    onChange={() => filteredData("react")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-2" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">React</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-3"
                    type="radio"
                    onChange={() => filteredData("javascript")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-3" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Javascript</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-4"
                    type="radio"
                    onChange={() => filteredData("typescript")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-4" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Typescript</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-5"
                    type="radio"
                    onChange={() => filteredData("next")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-5" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Next</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-6"
                    type="radio"
                    onChange={() => filteredData("tailwind")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-6" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Tailwind CSS</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-7"
                    type="radio"
                    onChange={() => filteredData("styled-components")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-7" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Styled Components</label>
              </div>
              <div className="pl-5 mt-3 flex items-center gap-3">
                <div className="checkbox-wrapper">
                  <input
                    id="_checkbox-8"
                    type="radio"
                    onChange={() => filteredData("API")}
                    name="tt"
                  />
                  <label htmlFor="_checkbox-8" id="tt">
                    <div className="tick_mark"></div>
                  </label>
                </div>
                <label className="font-sans">Rest API</label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <motion.section
        className="mt-[-30px] py-[30px] flex justify-evenly gap-x-16 gap-y-[64px] flex-wrap pr-[5%] for-scroll"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {data.map((project) => (
          <OneProject
            key={project.id}
            title={project.title}
            imgSrc={project.img}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
            tools={project.tools}
          />
        ))}
      </motion.section>
    </main>
  );
};

export default ProjectsPage;
