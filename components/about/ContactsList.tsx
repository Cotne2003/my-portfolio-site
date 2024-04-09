import { useState } from "react";
import email from "/public/logos/Email.svg";
import telephone from "/public/logos/telephone.png";
import arrow from "/public/logos/arrow.png";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ContactsList = () => {
  const [contacts, setContacts] = useState(false);
  const contactsHandler = () => {
    setContacts(!contacts);
  };
  return (
    <>
      <div className="mt-[20px]">
        <div
          className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
          onClick={contactsHandler}
        >
          <span className={`${contacts ? "rotate-90" : "rotate-0"}`}>
            <Image src={arrow} width={10} alt="" />
          </span>{" "}
          contacts
        </div>
      </div>
      <AnimatePresence>
        {contacts && (
          <motion.div
            className="mt-3"
            initial={{ opacity: 0, scaleY: 0, originY: 0 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, originY: 0 }}
          >
            <div className="pl-5 flex gap-3 items-center font-sans py-1 hover:opacity-50 cursor-pointer">
              <span>
                <Image src={email} width={15} alt="" />
              </span>
              basiashvilic@gmail.com
            </div>
            <div className="pl-5 flex gap-3 items-center font-sans py-1 hover:opacity-50 cursor-pointer">
              <span>
                <Image src={telephone} width={15} alt="" />
              </span>
              +(995) 568 864 004
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactsList;
