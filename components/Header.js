import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = ["About", "Experience", "Projects", "Contact"];

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function onScroll() {
    setScrollPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 backdrop-blur-lg transition-all bg-[#000C13]/50 ${
        typeof window !== "undefined" && scrollPosition > 100 ? "py-4" : "py-8"
      } z-10`}
    >
      <div className="flex justify-between items-center text-sm container mx-auto ">
        <a href="/">
          <Image src="/logo.svg" width={60} height={20} alt="RDJ" />
        </a>
        <div className="flex items-center gap-x-7 font-mono">
          {navLinks.map((content, i) => (
            <NavLink content={content} index={i} key={i} />
          ))}
          <button className="px-4 py-2 transition rounded-md border-sky-400 text-sky-400 border hover:bg-sky-900/25 font-sans">
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ index, content }) => (
  <a
    href={`#${content.toLowerCase()}`}
    className="text-slate-400 cursor-pointer hover:text-slate-200 hidden md:block"
  >
    <span className="text-sky-400">{index}. </span>
    {content}
  </a>
);
