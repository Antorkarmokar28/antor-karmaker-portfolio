import Image from "next/image";
import educationImage from "@/assets/education.png";
export default function EducationPage() {
  return (
    <div className="bg-[#1c1c22] text-gray-200 py-10 px-6 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl text-center font-bold mb-6 text-[#00ff99]">Education</h1>
        <div className="bg-[#1c1c22] p-6 border-t-2 border-b-2 border-[#00ff99] rounded-xl md:flex items-center justify-center gap-6">
          <div>
            {/* education image */}
            <Image
              src={educationImage}
              alt="Education or Profile"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg object-cover w-full h-64"
            />
          </div>
          <div className="text-gray-200 mt-6 md:mt-0">
            <h2 className="text-md md:text-2xl font-semibold mb-2">
              Bachelor of Business Studies (BBS)
            </h2>
            <p className="text-xs md:text-sm lg:text-lg mb-1">
              Final Year Student, Department of BBS
            </p>
            <p className="text-xs md:text-sm lg:text-lg mb-1">
              Major Subjects: Accounting and Economics
            </p>
            <p className="text-xs md:text-sm lg:text-lg">
              <span className="font-medium">Institution:</span> Govt. Saadat
              College, Tangail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
