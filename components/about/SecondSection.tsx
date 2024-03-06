import { motion, AnimatePresence } from "framer-motion";
import { MouseEventHandler } from "react";

type Props = {
  pers: boolean;
  prof: boolean;
  persHandler: MouseEventHandler<HTMLDivElement>;
  profHandler: MouseEventHandler<HTMLDivElement>;
  profTabHandler: MouseEventHandler<HTMLDivElement>;
  profTab: boolean;
};

const SecondSection = ({
  pers,
  prof,
  persHandler,
  profHandler,
  profTabHandler,
  profTab,
}: Props) => {
  const persTxt =
    "In both my personal and professional endeavors, confidence has been a defining trait. I am Cotne Basiashvili, 20 years old from Tbilisi, Georgia. Independently, I've cultivated a capacity for navigating life's complexities with a resolute mindset. In the professional arena, my confidence translates into the ability to approach challenges independently and find effective solutions. However, I recognize the importance of collaboration in achieving broader goals. I am adept at working within a team, leveraging diverse perspectives to enhance problem-solving and achieve shared objectives. This combination of self-assurance and collaborative prowess underscores my approach to both personal and professional spheres.";
  const profTxt =
    "As a junior front-end web developer, I am committed to an ongoing journey of skill enhancement and embracing emerging technologies. While my foray into the expansive realm of tech occurred just a few months ago, I've swiftly demonstrated remarkable adaptability and a keen ability to learn flexibly. Although my solid foundation in IT from Georgian Technology University provided a robust base, my appetite for more adventurous learning experiences prompted me to seek new horizons. In pursuit of these endeavors, I have recently joined a dynamic team, where I look forward to collaborating on exciting projects that not only challenge me but also contribute to my growth as a developer. This decision reflects my eagerness to immerse myself in a stimulating environment, where the synergy of teamwork and innovative projects fosters continuous learning and professional development.";

  return (
    <section className="w-[40%] mt-[-5px]">
      <div className="flex gap-10">
        <motion.div
          className="cursor-pointer"
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className={`text-2xl rounded-lg py-2 pl-4 gap-8 flex justify-between pr-4  ${
              pers ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
            }`}
            onClick={persHandler}
          >
            <div>
              {"//"} info <span className="text-[#607b96]">/ personal</span>
            </div>
          </h2>
        </motion.div>
        <AnimatePresence>
          {profTab && (
            <motion.div
              className="cursor-pointer"
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              exit={{ x: -100, opacity: 0 }}
            >
              <h2
                className={`text-2xl rounded-lg py-2 pl-4 gap-8 flex justify-between pr-4 ${
                  prof ? "bg-[#5e5e5e7a]" : "hover:bg-[#5e5e5e7a]"
                }`}
                onClick={profHandler}
              >
                <div>
                  {"//"} info{" "}
                  <span className="text-[#607b96]">/ PROFFESIONAL</span>
                </div>
                <span
                  className="Caveat text-gray-400 hover:text-white cursor-default"
                  onClick={profTabHandler}
                >
                  X
                </span>
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {pers ? (
        <motion.p
          className="mt-[37px] text-[#8bb4dd] text-xl font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {persTxt}
        </motion.p>
      ) : prof ? (
        <motion.p className="mt-[37px] text-[#8bb4dd] text-xl font-sans">
          {profTxt}
        </motion.p>
      ) : (
        ""
      )}
    </section>
  );
};

export default SecondSection;
