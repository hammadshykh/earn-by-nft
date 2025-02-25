"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinksProps {
 className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
 const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/packages", label: "Packages" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact Us" },
 ];

 return (
  <nav className={cn("flex items-center gap-6", className)}>
   {links.map((link) => (
    <Link
     key={link.href}
     href={link.href}
     className="font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
     {link.label}
    </Link>
   ))}
  </nav>
 );
}
