"use client";
import Image from "next/image";
import heroImage from "@/assets/antor-1.png";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { motion } from "motion/react";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Hero = () => {
  // const codeString = `
  // const addCounter = () => {
  // let counter = 0;
  // return () => {
  //   counter += 1;
  //   console.log(counter);
  //   };
  // };
  // const res = addCounter();
  // res();
  // res();`;

  return (
    <div className="border-b-2 border-[#00ff99] rounded-b-3xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse items-center xl:gap-20 2xl:gap-36  md:flex-row">
          {/* hero title */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="w-full md:w-2/4 mb-10 md:mb-0"
          >
            <motion.h3
              variants={slideInFromTop(0.2)}
              className="text-2xl lg:text-3xl mb-3 lg:mb-6"
            >
              Hello! I am
            </motion.h3>
            <motion.h1
              variants={slideInFromLeft(0.4)}
              className="text-3xl lg:text-5xl mb-3 lg:mb-6 text-[#00ff99]"
            >
              ANTOR KARMAKER
            </motion.h1>
            <motion.h3
              variants={slideInFromLeft(0.6)}
              className="text-2xl lg:text-3xl mb-3 lg:mb-6"
            >
              I AM A{" "}
              <span className="text-[#00ff99]">MERN STACK WEB DEVELOPER</span>
            </motion.h3>
            <motion.p
              variants={slideInFromRight(0.8)}
              className="text-sm lg:text-md mb-3 lg:mb-6 leading-6 lg:leading-8 font-serif"
            >
              I specialize in building full-stack web applications using
              MongoDB, Express.js, Next js, React, and Node.js. With a strong
              focus on clean code, responsive design, and user-friendly
              interfaces, I love turning ideas into fast, scalable, and dynamic
              web solutions.
            </motion.p>
            <motion.div
              variants={slideInFromBottom(1)}
              className="md:flex items-center gap-6 lg:gap-10"
            >
              {/* resume download button */}
              <Link
                href="https://drive.google.com/file/d/1oa5dSq2wcR3pUKuNjzSfDE67X4qgDTQO/view?usp=sharing"
                download
                className="flex items-center gap-3 text-white bg-[#303133] p-4 rounded-full text-sm lg:text-lg font-bold w-48 justify-center outline-2 outline-offset-2 outline-[#00ff99] mb-6"
              >
                Get Resume
                <FiDownloadCloud />
              </Link>
              {/* social inner */}
              <div className="flex gap-6 mb-6">
                <Link href="/">
                  <CiFacebook className="text-3xl lg:text-5xl text-[#00ff99]" />
                </Link>
                <Link href="/">
                  <CiLinkedin className="text-3xl lg:text-5xl text-[#00ff99]" />
                </Link>
                <Link href="/">
                  <CiInstagram className="text-3xl lg:text-5xl text-[#00ff99]" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* hero image inner */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.6)}
            className="mb-6 md:mb-0 w-full md:w-2/4 rounded-full border-2 border-[#00ff99] relative "
          >
            {/* hero image */}
            <Image src={heroImage} alt="hero-image" width={600} height={600} />
            {/* hero html tag */}
            <div className="absolute top-[30%] left-[70%] text-white text-shadow-xl text-2xl">
              {"<h1></h1>"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[38%] left-[3%] text-white text-shadow-xl text-xl">
              {"<section></section>"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[48%] left-[80%] text-white text-shadow-lg text-2xl">
              {"<p></p>"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[18%] left-[15%] text-white text-shadow-xl text-2xl">
              {"<img / >"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[12%] left-[62%] text-white text-shadow-xl text-2xl">
              {"<hr / >"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[56%] left-[3%] text-white text-shadow-xl text-2xl">
              {"<em></em>"}
            </div>
            {/* hero html tag */}
            <div className="absolute top-[68%] left-[78%] text-white text-shadow-xl text-2xl">
              {"<></>"}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
