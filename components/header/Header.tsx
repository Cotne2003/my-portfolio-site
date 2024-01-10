import Link from "next/link";
import React from "react";

const Header = () => {
  const HeaderText = "text-[#607b96] py-4 px-8";
  console.log("hello world");
  return (
    <header className="bg-[#011221] flex justify-between border-[1px] border-[#1e2d3d] rounded-t-lg">
      <div className="flex">
        <p
          className={`text-[#607b96] py-4 border-r-[1px] border-[#1e2d3d] pl-4 pr-32`}
        >
          Cotne Basiashvili
        </p>
        <nav className="flex">
          <Link
            href={"/"}
            className={`${HeaderText} border-r-[1px] border-[#1e2d3d] cursor-pointer`}
          >
            Hello
          </Link>
          <Link
            href={"/about"}
            className={`${HeaderText} border-r-[1px] border-[#1e2d3d] cursor-pointer`}
          >
            About Me
          </Link>
          <Link
            href={"projects"}
            className={`${HeaderText} border-r-[1px] border-[#1e2d3d] cursor-pointer`}
          >
            Projects
          </Link>
        </nav>
      </div>
      <Link
        href={"/contact-me"}
        className={`${HeaderText} border-l-[1px] border-[#1e2d3d] cursor-Linkointer`}
      >
        Contact Me
      </Link>
    </header>
  );
};

export default Header;
