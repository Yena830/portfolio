"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Black_Ops_One } from "@next/font/google";
import { MenuOverlay } from "./MenuOverlay";
import Image from "next/image";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Project",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#242122] bg-opacity-95">
      <div className="grid grid-cols-3 items-center mx-auto py-4 pl-6 pr-10">
        <div className="mobile-menu block md:hidden ">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py- 2 text-white hover:text-[#7fc3dc]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex  items-center px-3 py- 2 text-white hover:text-[#7fc3dc]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        <div className="menu hidden md:block md:w-auto col-span-1 " id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex justify-center items-center">
          <Link
            href={"/"}
            className={`text-2xl md:text-5xl text-white text-center ${blackOpsOne.className}`}
          >
            YENA
          </Link>
        </div>
        <div className="socials flex flex-row justify-end gap-2 col-span-1 items-end">
          <Link href="https://github.com/Yena830">
            <Image src="/github-icon.svg" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/in/yena830/">
            <Image
              src="/linkedin-icon.svg"
              width={30}
              height={30}
              style={{
                filter:
                  "invert(41%) sepia(93%) saturate(1963%) hue-rotate(177deg) brightness(110%) contrast(88%)",
              }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
