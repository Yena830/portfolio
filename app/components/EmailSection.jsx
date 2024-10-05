import React from "react";
import GithubIcon from "../../../pubic/github-icon.svg";
import LinkdinIcon from "../../../pubic/linkdin-icon.svg";

export const EmailSection = () => {
  return (
    <section className="grid md:drid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#Adb7be] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2"></div>
        <Link href="https://github.com/Yena830"></Link>
      </div>
    </section>
  );
};
