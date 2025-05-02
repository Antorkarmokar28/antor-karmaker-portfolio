import aboutUsImage from "@/assets/antor-3.png";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="bg-[#1c1c22] mt-20">
      <div className="bg-[#1c1c22] container mx-auto px-4 md:px-6">
        <div className="lg:flex items-center justify-between">
          <div className="w-full lg:w-2/4">
            <Image
              src={aboutUsImage}
              alt="aboutUs-Image"
              width={600}
              height={600}
            />
          </div>
          <div className="w-full lg:w-2/4 mt-10 lg:mt-0 text-gray-300">
            <h1 className="text-4xl mb-2 font-bold text-[#00ff99]">ABOUT ME</h1>
            <p className="text-sm xl:text-lg leading-5 lg:leading-8">
              Hello! {"I'm"} a final year student in the Bachelor of Business
              Studies (BBS) program at
              <span className="font-medium">
                {" "}
                Govt. Saadat College, Tangail
              </span>
              . My major subjects are
              <span className="font-medium"> Accounting</span> and
              <span className="font-medium"> Economics</span>.
            </p>

            <p className="text-sm xl:text-lg leading-5 lg:leading-8 mt-3">
              Although I’m not from a Computer Science background, I am
              passionate about learning new skills and exploring the world of
              technology, business, and finance. I believe that real growth
              happens when we step outside our comfort zones and learn something
              new every day.
            </p>

            <p className="text-sm xl:text-lg leading-5 lg:leading-8 mt-3">
              I am hardworking, curious, and always open to opportunities that
              help me grow — whether in business, communication, or digital
              tools. {"I'm"} currently exploring different areas like web
              development, online business, and personal development.
            </p>

            <p className="text-sm xl:text-lg leading-5 lg:leading-8 mt-3">
              Thank you for visiting my page. Feel free to connect with me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
