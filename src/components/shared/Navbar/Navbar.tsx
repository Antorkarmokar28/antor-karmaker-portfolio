"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { navLinks } from "./navLinks";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="py-8 border-b-2 bg-[#1c1c22] border-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* navbar logo */}
          <Logo />
          {/* navbar menu */}
          <ul className="flex gap-6">
            {navLinks.map(({ href, key, title }) => (
              <li key={key} className="text-lg">
                <Link
                  href={href}
                  className={
                    pathName === href
                      ? "text-[#00ff99] font-bold border-b-2 border-[#00ff99] pb-2"
                      : "text-white hover:text-[#00ff99]"
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          {/* hireme button */}
          <div>
            <Link
              className="flex items-center gap-3 text-white bg-[#303133] p-4 rounded-full text-lg font-bold"
              href="/contact"
            >
              Hire me
              <MdKeyboardDoubleArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
