"use client";

import React, { useEffect, useState } from "react";
import arrow from "/public/logos/arrow.png";
import OneProject from "../OneProject/OneProject";
import { Data, dataProps } from "@/_data";

const ProjectsPage = () => {
  useEffect(() => {
    setData(Data);
  }, []);

  const [data, setData] = useState<dataProps[]>([]);

  const [tech, setTech] = useState(true);
  const techHandler = () => {
    setTech(!tech);
  };

  return (
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[5%]">
      <section className="w-[220px]">
        <h2 className="text-5xl">projects</h2>
        <div className="mt-[40px]">
          <div
            className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
            onClick={techHandler}
          >
            <span className={`${tech ? "rotate-90" : "rotate-0"}`}>
              <img src={arrow.src} width={10} alt="" />
            </span>{" "}
            tech stacks
          </div>
        </div>
        {tech && (
          <div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">React</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Javascript</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Typescript</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Next</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Tailwind CSS</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Styled Components</label>
            </div>
            <div className="pl-5 mt-3 flex items-center gap-3">
              <input type="checkbox" className="custom-checkbox" />
              <label className="font-sans">Rest API</label>
            </div>
          </div>
        )}
      </section>
      <section className="mt-[88px]">
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
      </section>
    </main>
  );
};

export default ProjectsPage;
