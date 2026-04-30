import React from "react";
import { Black_Ops_One } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="bg-black/20 border-t border-pink-200/20 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* 个人品牌区域 - 占2列 */}
          <div className="space-y-4 md:col-span-2 order-1">
            <h3 className={`${blackOpsOne.className} text-2xl text-pink-300 mb-4`}>
              HappyMoon
            </h3>
            <p className="text-pink-100 text-sm leading-relaxed">
              Software Developer & AI Enthusiast passionate about creating 
              innovative solutions and building the future of technology.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/Yena830"
                className="text-pink-200 hover:text-pink-300 transition-colors duration-300"
              >
                <Image src="/github-icon.svg" width={24} height={24} alt="GitHub" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/yena830/"
                className="text-pink-200 hover:text-pink-300 transition-colors duration-300"
              >
                <Image
                  src="/linkedin-icon.svg"
                  width={24}
                  height={24}
                  alt="LinkedIn"
                  style={{
                    filter: "invert(41%) sepia(93%) saturate(1963%) hue-rotate(177deg) brightness(110%) contrast(88%)",
                  }}
                />
              </Link>
            </div>
          </div>

          {/* 快速链接区域 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block text-pink-100 hover:text-pink-300 transition-colors duration-300">
                About Me
              </Link>
              <Link href="#skills" className="block text-pink-100 hover:text-pink-300 transition-colors duration-300">
                Skills
              </Link>
              <Link href="#projects" className="block text-pink-100 hover:text-pink-300 transition-colors duration-300">
                Projects
              </Link>
              <Link href="#contact" className="block text-pink-100 hover:text-pink-300 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* 联系信息区域 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-300 mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-pink-100">
                📧 yueyue0256@outlook.com
              </p>
              <p className="text-pink-100">
                📍 Urbana, IL
              </p>
              <p className="text-pink-100">
                🎓 UIUC Information Science
              </p>
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-pink-200/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-pink-200 text-sm">
              © 2025 Yueyue Lin. All rights reserved.
            </p>
            <p className="text-pink-200 text-sm">
            Under the Strawberry Moon, Happy Moon codes 🌙
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
