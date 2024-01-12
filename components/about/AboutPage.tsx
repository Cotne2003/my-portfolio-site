"use client";

import React, { useState } from "react";
import FirstSection from "./FirstSection";

const AboutPage = () => {
  const persTxt =
    "In both my personal and professional endeavors, confidence has been a defining trait. I am Cotne Basiashvili, 20 years old from Tbilisi, Georgia. Independently, I've cultivated a capacity for navigating life's complexities with a resolute mindset. In the professional arena, my confidence translates into the ability to approach challenges independently and find effective solutions. However, I recognize the importance of collaboration in achieving broader goals. I am adept at working within a team, leveraging diverse perspectives to enhance problem-solving and achieve shared objectives. This combination of self-assurance and collaborative prowess underscores my approach to both personal and professional spheres.";
  const profTxt =
    "As a junior front-end web developer, I am committed to an ongoing journey of skill enhancement and embracing emerging technologies. While my foray into the expansive realm of tech occurred just a few months ago, I've swiftly demonstrated remarkable adaptability and a keen ability to learn flexibly. Although my solid foundation in IT from Georgian Technology University provided a robust base, my appetite for more adventurous learning experiences prompted me to seek new horizons. In pursuit of these endeavors, I have recently joined a dynamic team, where I look forward to collaborating on exciting projects that not only challenge me but also contribute to my growth as a developer. This decision reflects my eagerness to immerse myself in a stimulating environment, where the synergy of teamwork and innovative projects fosters continuous learning and professional development.";

  const [pers, setPers] = useState(true);
  const [prof, setProf] = useState(false);

  const persHandler = () => {
    setPers(true);
    setProf(false);
  };
  const profHandler = () => {
    setPers(false);
    setProf(true);
  };

  return (
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[5%]">
      <FirstSection
        persHandler={persHandler}
        pers={pers}
        profHandler={profHandler}
        prof={prof}
      />
      <section className="w-[40%] mt-[-5px]">
        <div className="flex gap-10">
          <div className="cursor-pointer">
            <h2
              className={`text-2xl rounded-lg py-2 pl-4 w-[210px] ${
                pers ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
              }`}
              onClick={persHandler}
            >
              // info <span className="text-[#607b96]">/ personal</span>
            </h2>
          </div>
          <div className="cursor-pointer">
            <h2
              className={`text-2xl rounded-lg py-2 pl-4 w-[240px] ${
                prof ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
              }`}
              onClick={profHandler}
            >
              // info <span className="text-[#607b96]">/ PROFFESIONAL</span>
            </h2>
          </div>
        </div>
        <p className="mt-[37px] text-[#8bb4dd] text-xl font-sans">
          {pers ? persTxt : prof ? profTxt : ""}
        </p>
      </section>
    </main>
  );
};

export default AboutPage;