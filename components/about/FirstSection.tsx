import { MouseEventHandler, useState } from "react";
import arrow from "/public/logos/arrow.png";
import ContactsList from "./ContactsList";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  const waitedH2 = () => {
    if (info === false && pers === true) {
      return (
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[240px] text-3xl text-[#B336FF] lg:hidden"
        >
          personal
        </motion.h2>
      );
    } else if (info === false && prof === true) {
      return (
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[240px] text-3xl text-[#B336FF] lg:hidden"
        >
          proffesional
        </motion.h2>
      );
    } else {
      return null;
    }
  };
  return (
    <section className="w-[220px] max-lg:w-full">
      <h2 className="text-5xl max-lg:text-4xl">about-me</h2>
      <div className="mt-[40px] max-lg:mt-[20px] max-lg:h-[120px]">
        <div
          className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer max-lg:text-xl"
          onClick={infoHandler}
        >
          <span className={`${info ? "rotate-90" : "rotate-0"}`}>
            <Image src={arrow} width={10} alt="" />
          </span>{" "}
          Info
        </div>
        <AnimatePresence>
          {info && (
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, scaleY: 0, originY: 0 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0, originY: 0 }}
            >
              <div
                className={`pl-5 flex items-center gap-3 Caveat uppercase py-1 ${
                  pers ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
                } rounded-lg cursor-pointer`}
                onClick={persHandler}
              >
                <span className={`${pers ? "rotate-90" : "rotate-0"}`}>
                  <Image src={arrow} width={10} alt="" />
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
                  <Image src={arrow} width={10} alt="" />
                </span>{" "}
                proffesional
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {waitedH2()}
      <div className="max-lg:hidden">
        <ContactsList />
      </div>
    </section>
  );
};

export default FirstSection;
