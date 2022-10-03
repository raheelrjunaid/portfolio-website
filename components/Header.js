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
      className={`fixed top-0 left-0 right-0 bg-[#000C13]/50 backdrop-blur-lg transition-all ${
        typeof window !== "undefined" && scrollPosition > 100 ? "py-4" : "py-8"
      } z-50`}
    >
      <div className="container mx-auto flex items-center justify-between text-sm ">
        <a href="#" className="flex items-center">
          <Image src="/logo.svg" width={60} height={20} alt="RDJ" />
        </a>
        <div className="flex items-center gap-x-7 font-mono">
          {navLinks.map((content, i) => (
            <NavLink content={content} index={i} key={i} />
          ))}
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ index, content }) => (
  <a
    href={`#${content.toLowerCase()}`}
    className="hidden cursor-pointer text-slate-400 hover:text-slate-200 md:block"
  >
    <span className="text-sky-400">{index}. </span>
    {content}
  </a>
);
