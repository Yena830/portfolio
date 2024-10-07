"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm("service_ewflnf7", "template_7ypdkcl", form.current, {
        publicKey: "sEUhe3CwfKD7ZDmae",
      })
      .then(
        (result) => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 3000);
        }
      );
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="absolute w-40 h-40 lg:w-96 lg:h-96  sm:w-64 sm:h-64 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#277ca0b8] to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div z-10>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#Adb7be] mb-4 max-w-md">
          I&apos;m currently looking for an intern opportunities, my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Yena830">
            <Image src="/github-icon.svg" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/yena830/">
            <Image
              src="/linkedin-icon.svg"
              width={50}
              height={50}
              style={{
                filter:
                  "invert(41%) sepia(93%) saturate(1963%) hue-rotate(177deg) brightness(110%) contrast(88%)",
              }}
            />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              required
              className="bg-[#312d2f]  placeholder-[#ADB7BE] text-sm rounded-lg block w-full p-2.5"
              placeholder=" yourEmail@xxx.com"
            ></input>
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Your name
            </label>
            <input
              type="text"
              name="name"
              required
              className="bg-[#312d2f]  placeholder-[#ADB7BE] text-sm rounded-lg block w-full p-2.5"
              placeholder="May I have your name?"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              className="bg-[#312d2f]  placeholder-[#ADB7BE] text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              value="Send"
              className="bg-[#01aae7] w-full p-2.5 rounded-lg font-bold text-white hover:bg-[#fab0cd] duration-500"
            >
              Send message
            </button>
            {error && (
              <p className="text-[#fab0cd] mt-4">
                An error occurred. Please try again later.
              </p>
            )}
            {success && (
              <p className="text-[#fab0cd] mt-4">Message sent successfully!</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
