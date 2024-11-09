import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
<div className="bg-custom-radial rounded-full h-80 w-80 blur-2xl absolute top-1/2 top-full left-0 transform -translate-y-1/2 -translate-x-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit quas cum consequatur dolor ducimus odit ut nisi
          voluptate error aliquam?{" "}
        </p>
        <div className="flex flex-row gap-4">
          <FaGithub className=" text-white h-9 w-9" />
          <BsLinkedin className="text-white h-9 w-9" />
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  text-sm mb-2 font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="abc@gmail.com"
              className="bg-[#18191E] border border-[#333F3F] placeholder-[#9CA2A9] text-sm text-gray-100  rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2  text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="Subject"
              id="subject"
              required
              placeholder="Just saying hi"
              className="bg-[#18191E] border border-[#333F3F] placeholder-[#9CA2A9] text-sm text-gray-100  rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="message"
              className="text-white block  text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              className="bg-[#18191E] border border-[#333F3F] placeholder-[#9CA2A9] text-sm text-gray-100  rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;