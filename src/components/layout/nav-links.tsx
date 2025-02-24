import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinksProps {
 className?: string;
}

const textColorClass = "hover:text-gray-500 transition-colors";

export default function NavLinks({ className }: NavLinksProps) {
 return (
  <nav className={cn("flex items-center gap-8 text-base font-bold", className)}>
   <Link href={"/"} className={textColorClass}>
    Home
   </Link>
   <Link href={"/"} className={textColorClass}>
    About Us
   </Link>
   <Link href={"/"} className={textColorClass}>
    Privacy Policy
   </Link>
   <Link href={"/"} className={textColorClass}>
    Contact Us
   </Link>
  </nav>
 );
}
