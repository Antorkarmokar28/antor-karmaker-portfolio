import Logo from "../Logo/Logo";
import Link from "next/link";
import { CiPhone } from "react-icons/ci";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* About Section */}
          <div>
            <Logo />
            <p className="mt-4 text-sm leading-relaxed">
              I am a passionate MERN stack web developer specializing in
              building fast, responsive, and scalable web applications using
              MongoDB, Express.js, React, Next.js, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#00ff99] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#00ff99] transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00ff99] transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00ff99] transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <CiPhone className="text-[#00ff99] text-xl" />
                <span>+880 1771 933253</span>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="text-[#00ff99] text-xl" />
                <span>antorkarmokar28@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MdLocationOn className="text-[#00ff99] text-xl" />
                <span>Tangail, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Antor Karmaker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
