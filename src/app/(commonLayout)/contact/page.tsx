// app/contact/page.tsx
import { CiPhone } from "react-icons/ci";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="bg-[#1c1c22] py-20 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-[#00ff99] text-4xl font-bold text-center mb-12">
          CONTACT ME
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-[#24242b] rounded-2xl border border-[#00ff99] p-8 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#00ff99] p-4 rounded-full mb-4">
              <CiPhone className="text-white text-3xl" />
            </div>
            <h6 className="text-white text-xl font-semibold mb-2">Phone</h6>
            <p className="text-gray-300 text-sm">+880 1771 933253</p>
          </div>

          {/* Email */}
          <div className="bg-[#24242b] rounded-2xl border border-[#00ff99] p-8 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#00ff99] p-4 rounded-full mb-4">
              <MdEmail className="text-white text-3xl" />
            </div>
            <h6 className="text-white text-xl font-semibold mb-2">Email</h6>
            <p className="text-gray-300 text-sm">antorkarmokar28@gmail.com</p>
          </div>

          {/* Location or Social */}
          <div className="bg-[#24242b] rounded-2xl border border-[#00ff99] p-8 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="bg-[#00ff99] p-4 rounded-full mb-4">
              <MdLocationOn className="text-white text-3xl" />
            </div>
            <h6 className="text-white text-xl font-semibold mb-2">Location</h6>
            <p className="text-gray-300 text-sm">Tangail, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
