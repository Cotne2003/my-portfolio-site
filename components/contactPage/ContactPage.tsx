"use client";
import React, { useState } from "react";
import ContactsList from "../about/ContactsList";
import arrow from "/public/logos/arrow.png";
import link from "/public/logos/link.png";
import Form from "./Form";

const ContactPage = () => {
  const [also, setAlso] = useState(false);
  const alsoHandler = () => {
    setAlso(!also);
  };

  console.log("styles");

  return (
    <main className="h-[100vh] flex pl-[8%] pt-[150px] gap-[5%]">
      <section className="w-[250px]">
        <h2 className="text-5xl">contact-me</h2>
        <div className="mt-[40px]">
          <ContactsList />
        </div>
        <div>
          <div className="mt-[20px]">
            <div
              className="rounded-lg py-1 pl-4 bg-[#1e2d3d] text-2xl Caveat uppercase flex items-center gap-1 cursor-pointer"
              onClick={alsoHandler}
            >
              <span className={`${also ? "rotate-90" : "rotate-0"}`}>
                <img src={arrow.src} width={10} alt="" />
              </span>{" "}
              also find me in
            </div>
          </div>
          {also && (
            <div className="mt-3">
              <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer">
                <span>
                  <img src={link.src} width={15} alt="" />
                </span>
                <a
                  href="https://www.instagram.com/bassiashvili_cotnee/"
                  target="_blank"
                  className="font-sans"
                >
                  Instagram
                </a>
              </div>
              <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer">
                <span>
                  <img src={link.src} width={15} alt="" />
                </span>
                <a
                  href="https://www.linkedin.com/in/cotne-basiashvili-23a532282/"
                  target="_blank"
                  className="font-sans"
                >
                  LinkedIn
                </a>
              </div>
              <div className="pl-5 flex gap-3 items-center py-1 hover:opacity-50 cursor-pointer">
                <span>
                  <img src={link.src} width={15} alt="" />
                </span>
                <a
                  href="https://www.facebook.com/TsotneBasiashvili"
                  target="_blank"
                  className="font-sans"
                >
                  Facebook
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
      <Form />
    </main>
  );
};

export default ContactPage;
