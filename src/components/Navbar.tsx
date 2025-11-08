"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "Hero", path: "/hero" },
    { name: "Features", path: "/features" },
    { name: "Team", path: "/team" },
    { name: "CTA", path: "/cta" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Models", path: "/models" },
    { name: "Demo", path: "/demo" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const sectionLinks = [
    { name: "Hero", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Team", id: "team" },
    { name: "CTA", id: "cta" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="font-bold text-xl">MyWebsite</div>
      <ul className="flex gap-4 flex-wrap">
        {pageLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={pathname === link.path ? "text-yellow-400" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {pathname === "/" &&
          sectionLinks.map((section) => (
            <li key={section.name}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="hover:text-yellow-400"
              >
                {section.name}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
