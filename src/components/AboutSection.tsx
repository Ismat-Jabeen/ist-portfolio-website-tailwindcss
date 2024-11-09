"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { title } from "process";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc(Hons.) from University of Karachi</li>
        <li>M.Sc(Botany) from University of Karachi</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 ">
        <h3 className="underline font-semibold">Front-End Web Developer</h3>
        <li>
          Developed projects with HTML, CSS, JavaScript, and TypeScript,
          including cli calculator, countdown timer, and number
          guessing game etc.
        </li>
        </ul>
    ),
  },
];

const AboutSection = () => {
  // Correctly destructure useTransition here
  const [isPending, startTransition] = useTransition(); // Swap the order of startTransition and isPending

  const [tab, setTab] = useState("skills");

  type TabId = "skills" | "education" | "experience";

  const handleTabChange = (id: TabId) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white  ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          alt="about-img"
          width={500}
          height={500}
        ></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            quos et aperiam fuga? Labore, nesciunt Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Officia soluta velit voluptatibus
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            similique, minus soluta dolorem ab quod Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consequatur nulla odit vel adipisci
            ipsa deseru
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <span
              onClick={() => handleTabChange("skills")}
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] ${
                tab === "skills" ? "border-b-4 border-purple-500 " : ""
              }`}
            >
              Skills
            </span>
            <span
              onClick={() => handleTabChange("education")}
              className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] ${
                tab === "education" ? "border-b-4 border-purple-500" : ""
              }`}
            >
              Education
            </span>
            <span
              onClick={() => handleTabChange("experience")}
              className={`font-semibold hover:text-white text-[#ADB7BE] ${
                tab === "experience" ? "border-b-4 border-purple-500 " : ""
              }`}
            >
              Experience
            </span>
          </div>
          <div className="mt-8">
            {tabData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;