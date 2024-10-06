import React from "react";
import { Black_Ops_One } from "@next/font/google";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-b-transparent border-r-transparent text-wthie">
      <div className="container p-12 flex justify-between">
        <span className={`${blackOpsOne.className}  text-2xl`}>YENA</span>
        <p className="text-[#33353F]"> All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
