"use client";
import React, { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/20 backdrop-blur-md">
      <div className="flex items-center justify-between py-4 px-6 ">
        <div className="flex items-center">
          <div className="mobile-menu block md:hidden mr-4">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 font-bold text-white hover:text-[#FF6F61] transition-colors duration-300"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 text-white hover:text-[#FF6F61] transition-colors duration-300"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          
          {/* 移动端菜单覆盖层 */}
          {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
          
          {/* 桌面端导航链接 - 紧贴左侧 */}
          <div className="menu hidden md:block" id="navbar">
            <ul className="flex space-x-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink 
                    href={link.path} 
                    title={link.title} 
                    isActive={activeSection === link.path.replace('#', '')}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 右侧：社交媒体图标 - 紧贴右侧 */}
        {!navbarOpen ? (
          <div className="flex gap-4">
            <Link 
              href="https://github.com/Yena830"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image src="/github-icon.svg" width={30} height={30} alt="GitHub" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/yena830/"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/linkedin-icon.svg"
                width={30}
                height={30}
                alt="LinkedIn"
                style={{
                  filter:
                      "invert(41%) sepia(93%) saturate(1963%) hue-rotate(177deg) brightness(110%) contrast(88%)",
                }}
              />
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
