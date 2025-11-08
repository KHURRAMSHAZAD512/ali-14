"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "Hero", path: "/hero" },
    { name: "Features", path: "/features" },
    { name: "Team", path: "/team" },
    { name: "CTA", path: "/cta" },
    { name: "Services", path: "/services" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      {pageLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={pathname === link.path ? "text-yellow-400" : ""}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
