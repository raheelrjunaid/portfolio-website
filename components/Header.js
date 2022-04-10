import Image from "next/image";
import React from "react";

const navLinks = ["About", "Experience", "Projects", "Contact"];

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-lg py-8">
      <div className="flex justify-between items-center text-sm container mx-auto ">
        <Image src="/logo.svg" width={60} height={20} alt="RDJ" />
        <div className="flex items-center gap-x-7 font-mono">
          {navLinks.map((content, i) => (
            <NavLink content={content} index={i} />
          ))}
          <button className="px-4 py-2 rounded-md border-sky-400 text-sky-400 border hover:bg-sky-900/25 font-sans">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ index, content }) => (
  <a
    key={index}
    href={`#${content.toLowerCase()}`}
    class="text-slate-400 cursor-pointer hover:text-slate-200"
  >
    <span className="text-sky-400">{index}. </span>
    {content}
  </a>
);
