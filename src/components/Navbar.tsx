"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverLay from "./MenuOverLay"; // Import only; don't redeclare

// Define the navigation links
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

// Define the props for MenuOverLay
interface MenuOverlayProps {
  links: {
    title: string;
    path: string;
  }[];
}

// Define the MenuOverLay component
const MenuOverLay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <div className="menu-overlay">
      <ul className="flex flex-col items-center space-y-4 p-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo Section */}
        <Link className="text-2xl md:text-5xl text-white font-semibold" href={"/"}>
          
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600 ">Ismat Jabeen</span>
        </Link>
     
        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Overlay for Mobile */}
      {navbarOpen && <MenuOverLay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
