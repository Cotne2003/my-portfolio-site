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
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[5%]">
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
