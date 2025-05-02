"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { navLinks } from "./navLinks";
import Logo from "../Logo/Logo";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathName = usePathname();
  const [nav, setNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => window.removeEventListener("scroll", scrollNavbar);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`sticky top-0 z-40 bg-[#1c1c22] py-4 ${
        nav ? "border-b-2 border-[#00ff99]" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Menu items */}
          <ul className="hidden xl:flex gap-6">
            {navLinks.map(({ href, key, title }) => (
              <li key={key} className="text-lg">
                <Link
                  href={href}
                  className={`${
                    pathName === href
                      ? "text-[#00ff99] font-bold border-b-2 border-[#00ff99] pb-2"
                      : "text-white hover:text-[#00ff99]"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hire me button (desktop) */}
          <div className="hidden xl:block">
            <Link
              className="flex items-center gap-3 text-white bg-[#303133] p-4 rounded-full text-lg font-bold outline-2 outline-offset-2 outline-[#00ff99] hover:outline-[#00ccff] hover:scale-105 transition-all duration-300 ease-linear"
              href="/contact"
            >
              Hire me
              <MdKeyboardDoubleArrowRight />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="xl:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden mt-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, key, title }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`${
                      pathName === href
                        ? "text-[#00ff99] font-bold border-b-2 border-[#00ff99] pb-2"
                        : "text-white hover:text-[#00ff99]"
                    } block text-lg`}
                  >
                    {title}
                  </Link>
                </li>
              ))}

              {/* Hire me button (mobile) */}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 text-white bg-[#303133] p-4 rounded-full text-lg font-bold outline-2 outline-offset-2 outline-[#00ff99] hover:outline-[#00ccff] hover:scale-105 transition-all duration-300 ease-linear justify-center"
                >
                  Hire me
                  <MdKeyboardDoubleArrowRight />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
