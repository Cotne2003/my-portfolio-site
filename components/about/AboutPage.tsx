"use client";

import React, { useState } from "react";
import FirstSection from "./FirstSection";

const AboutPage = () => {
  const persTxt =
    "In both my personal and professional endeavors, confidence has been a defining trait. I am Cotne Basiashvili, 20 years old from Tbilisi, Georgia. Independently, I've cultivated a capacity for navigating life's complexities with a resolute mindset. In the professional arena, my confidence translates into the ability to approach challenges independently and find effective solutions. However, I recognize the importance of collaboration in achieving broader goals. I am adept at working within a team, leveraging diverse perspectives to enhance problem-solving and achieve shared objectives. This combination of self-assurance and collaborative prowess underscores my approach to both personal and professional spheres.";
  const profTxt =
    "In both my personal and professional endeavors, confidence has been a defining trait.";

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
    <main className="h-[100vh] flex pl-[8%] pt-[170px] gap-[10%]">
      <FirstSection
        persHandler={persHandler}
        pers={pers}
        profHandler={profHandler}
        prof={prof}
      />
      <section className="w-[40%] mt-[-5px]">
        <div className="flex gap-10">
          <div>
            <h2
              className="text-2xl bg-[#5e5e5e7a] rounded-lg py-2 pl-4 w-[210px]"
              onClick={persHandler}
            >
              // info <span className="text-[#607b96]">/ personal</span>
            </h2>
          </div>
          <div>
            <h2
              className="text-2xl bg-[#5e5e5e7a] rounded-lg py-2 pl-4 w-[240px]"
              onClick={profHandler}
            >
              // info <span className="text-[#607b96]">/ PROFFESIONAL</span>
            </h2>
          </div>
        </div>
        <p className="mt-[20px] text-[#8bb4dd] text-xl font-sans">
          {pers ? persTxt : prof ? profTxt : ""}
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
