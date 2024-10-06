"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Black_Ops_One } from "@next/font/google";
import { MenuOverlay } from "./MenuOverlay";

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
    title: "Project",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
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
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 pl-6 pr-10">
        <div className="mobile-menu block md:hidden">
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
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl text-white  ${blackOpsOne.className}`}
        >
          YENA
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
