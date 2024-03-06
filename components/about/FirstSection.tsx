import { MouseEventHandler, useState } from "react";
import arrow from "/public/logos/arrow.png";
import ContactsList from "./ContactsList";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  persHandler: MouseEventHandler<HTMLDivElement>;
  pers: boolean;
  profHandler: () => void;
  prof: boolean;
};

const FirstSection = ({ persHandler, pers, profHandler, prof }: Props) => {
  const [info, setInfo] = useState(true);
  const infoHandler = () => {
    setInfo(!info);
  };
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
        <AnimatePresence>
          {info && (
            <motion.div
              className="mt-3"
              initial={{ scaleY: 0, originY: 0, originX: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0, originY: 0, originX: 0 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ContactsList />
    </section>
  );
};

export default FirstSection;
