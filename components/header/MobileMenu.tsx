import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  menuHandler: () => void;
};

const MobileMenu = ({ menuHandler }: Props) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, x: -300 }}
      className="absolute top-[65px] bg-[#010c15] h-[100vh] w-full z-10 md:hidden"
    >
      <nav className="flex flex-col justify-start">
        <Link
          onClick={menuHandler}
          href={"/"}
          className={`${
            pathname === "/" ? "text-[#B336FF] scale-110 pl-[9%]" : ""
          } text-2xl pl-[5%] py-6 ease-out duration-300 active:scale-90 active:opacity-35 border-b-[1px] border-[#b236ff56]`}
        >
          Hello
        </Link>
        <Link
          onClick={menuHandler}
          href={"/about"}
          className={`${
            pathname === "/about" ? "text-[#B336FF] scale-110 pl-[9%]" : ""
          } text-2xl pl-[5%] py-6 ease-out duration-300 active:scale-90 active:opacity-35 border-b-[1px] border-[#b236ff56]`}
        >
          About Me
        </Link>
        <Link
          onClick={menuHandler}
          href={"projects"}
          className={`${
            pathname === "/projects" ? "text-[#B336FF] scale-110 pl-[9%]" : ""
          } text-2xl pl-[5%] py-6 ease-out duration-300 active:scale-90 active:opacity-35 border-b-[1px] border-[#b236ff56]`}
        >
          Projects
        </Link>
        <Link
          onClick={menuHandler}
          href={"/contact-me"}
          className={`${
            pathname === "/contact-me" ? "text-[#B336FF] scale-110 pl-[9%]" : ""
          } text-2xl pl-[5%] py-6 ease-out duration-300 active:scale-90 active:opacity-35 border-b-[1px] border-[#b236ff56]`}
        >
          Contact Me
        </Link>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
