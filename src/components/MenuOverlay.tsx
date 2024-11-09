import React from "react";
import NavLink from "./NavLink";

interface MenuOverLayProps {
    links:{
    title:string;
    path:string;
  }[];
}

const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];
  

const MenuOverlay = () => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
            <li key={index}>
        <NavLink key={index} href={link.path} title={link.title}/>
        </li>
        ))}
        </ul>
    );
};

export default MenuOverlay;