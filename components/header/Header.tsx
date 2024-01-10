import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="flex justify-between"
      style={{ boxShadow: "0px -8px 26.2px 0px #B336FF" }}
    >
      <p className="text-[#B336FF] uppercase text-3xl px-12 py-6">welcome !</p>
      <nav className="flex">
        <Link href={"/"} className="text-3xl px-12 py-6">
          Hello
        </Link>
        <Link href={"/about"} className="text-3xl px-12 py-6">
          About Me
        </Link>
        <Link href={"projects"} className="text-3xl px-12 py-6">
          Projects
        </Link>
        <Link href={"/contact-me"} className="text-3xl px-12 py-6">
          Contact Me
        </Link>
      </nav>
    </header>
  );
};

export default Header;
