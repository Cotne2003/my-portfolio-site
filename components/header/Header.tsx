import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex justify-between absolute top-0 left-0 w-full"
      style={{ boxShadow: "0px -8px 26.2px 0px #B336FF" }}
    >
      <p className="text-[#B336FF] uppercase text-3xl pl-[8%] py-6 max-[1439px]:text-2xl max-[1439px]:pl-[5%]">
        welcome !
      </p>
      <nav className="flex mr-[8%] max-[1439px]:mr-[5%]">
        <Link
          href={"/"}
          className="text-3xl px-12 py-6 hover:text-[#B336FF] ease-out duration-300 hover:scale-110 active:scale-90 active:opacity-35 max-[1439px]:text-2xl max-[1439px]:px-8"
        >
          Hello
        </Link>
        <Link
          href={"/about"}
          className="text-3xl px-12 py-6 hover:text-[#B336FF] ease-out duration-300 hover:scale-110 active:scale-90 active:opacity-35 max-[1439px]:text-2xl max-[1439px]:px-8"
        >
          About Me
        </Link>
        <Link
          href={"projects"}
          className="text-3xl px-12 py-6 hover:text-[#B336FF] ease-out duration-300 hover:scale-110 active:scale-90 active:opacity-35 max-[1439px]:text-2xl max-[1439px]:px-8"
        >
          Projects
        </Link>
        <Link
          href={"/contact-me"}
          className="text-3xl pl-12 py-6 hover:text-[#B336FF] ease-out duration-300 hover:scale-110 active:scale-90 active:opacity-35 max-[1439px]:text-2xl max-[1439px]:px-8 max-[1439px]:pr-[0px]"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
