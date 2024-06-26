"use client";

import { useState, MouseEventHandler } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const AboutPage = () => {
  // TEXTS ///////////////////////
  const [pers, setPers] = useState(true);
  const [prof, setProf] = useState(false);

  const persHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e?.stopPropagation();
    setPers(true);
    setProf(false);
  };
  const profHandler = () => {
    setPers(false);
    setProfTab(true);
    setProf(true);
  };

  // TAB ////////////////////////
  const [profTab, setProfTab] = useState(false);
  const profTabHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setProfTab(false);
    setPers(true);
    setProf(false);
  };

  return (
    <main className="min-h-[100vh] flex pl-[8%] pt-[150px] gap-[5%] max-lg:flex-col max-lg:px-[5%] max-lg:pt-[120px] max-lg:gap-[20px] max-lg:pb-[100px] max-md:pt-[100px]">
      <FirstSection
        persHandler={persHandler}
        pers={pers}
        profHandler={profHandler}
        prof={prof}
      />
      <SecondSection
        persHandler={persHandler}
        profHandler={profHandler}
        pers={pers}
        prof={prof}
        profTabHandler={profTabHandler}
        profTab={profTab}
      />
    </main>
  );
};

export default AboutPage;
