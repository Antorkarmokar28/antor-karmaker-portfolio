import Image from "next/image";
import heroImage from "@/assets/antor-1.png";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
const Hero = () => {
  return (
    <div className="border-b-2 border-[#00ff99] rounded-b-3xl">
      <div className="bg-[#1c1c22] container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse items-center xl:gap-20 2xl:gap-36  md:flex-row">
          {/* hero title */}
          <div className="w-full md:w-2/4 mb-10 md:mb-0">
            <h3 className="text-2xl lg:text-3xl mb-3 lg:mb-6">Hello! I am</h3>
            <h1 className="text-3xl lg:text-5xl mb-3 lg:mb-6 text-[#00ff99]">
              ANTOR KARMAKER
            </h1>
            <h3 className="text-2xl lg:text-3xl mb-3 lg:mb-6">
              I AM A{" "}
              <span className="text-[#00ff99]">MERN STACK WEB DEVELOPER</span>
            </h3>
            <p className="text-sm lg:text-md mb-3 lg:mb-6 leading-6 lg:leading-8 font-serif">
              I specialize in building full-stack web applications using
              MongoDB, Express.js, Next js, React, and Node.js. With a strong focus on
              clean code, responsive design, and user-friendly interfaces, I
              love turning ideas into fast, scalable, and dynamic web solutions.
            </p>
            <div className="md:flex items-center gap-6 lg:gap-10">
              {/* resume download button */}
              <Link
                href="/resume.pdf"
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
            </div>
          </div>

          {/* hero image */}
          <div className="mb-6 md:mb-0 w-full md:w-2/4 rounded-full border-2 border-[#00ff99]">
            <Image src={heroImage} alt="hero-image" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
