import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinksProps {
 className?: string;
}

export default function NavLinks({ className }: NavLinksProps) {
 return (
  <nav className={cn("flex items-center gap-8 text-base font-bold", className)}>
   <Link href={"/"}>Home</Link>
   <Link href={"/"}>About Us</Link>
   <Link href={"/"}>Privacy Policy</Link>
   <Link href={"/"}>Contact Us</Link>
  </nav>
 );
}
