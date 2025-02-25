"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
 Sheet,
 SheetContent,
 SheetTrigger,
 SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useFirebaseAuth } from "@/hooks/use-firebase-auth";

export function MobileNav() {
 const [isOpen, setIsOpen] = useState(false);
 const { user } = useFirebaseAuth();

 const handleClose = () => {
  setIsOpen(false);
 };

 return (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
   <SheetTrigger asChild className={`md:hidden text-black`}>
    <Menu className="h-6 w-6" />
   </SheetTrigger>
   <SheetContent side="right" className="w-full  text-black/90 border-0 pt-8">
    <div className="flex justify-between items-center">
     <div className="min-h-10" onClick={handleClose}>
      <div className="flex items-center gap-8">
       <Image
        src="/images/main-logo.webp"
        alt="TreasureNFT"
        width={180}
        height={48}
        className="h-10 w-auto"
       />
      </div>
     </div>
     <SheetClose asChild>
      <button
       onClick={handleClose}
       className="absolute right-4 top-4 mt-4 black-white/95 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
      >
       <X className="h-8 w-8 black-white/95 border-none outline-none focus:outline-none focus-visible:outline-none" />
       <span className="sr-only">Close</span>
      </button>
     </SheetClose>
    </div>
    <nav className="flex flex-col space-y-6 mt-8">
     <MobileLink href={"/"} onClick={handleClose}>
      Home
     </MobileLink>
     <MobileLink href={"/"} onClick={handleClose}>
      About Us
     </MobileLink>
     <MobileLink href={"/"} onClick={handleClose}>
      Contact Us
     </MobileLink>
    </nav>
    <div className="flex flex-col gap-4 py-4">
     <Link
      href="/marketplace"
      className="text-sm font-medium hover:text-primary"
     >
      Marketplace
     </Link>
     {user && (
      <>
       <Link
        href="/dashboard"
        className="text-sm font-medium hover:text-primary"
       >
        Dashboard
       </Link>
       <Link href="/team" className="text-sm font-medium hover:text-primary">
        My Team
       </Link>
      </>
     )}
    </div>
   </SheetContent>
  </Sheet>
 );
}

interface MobileLinkProps {
 href: string;
 onClick?: () => void;
 children: React.ReactNode;
 className?: string;
}

function MobileLink({ href, onClick, className, children }: MobileLinkProps) {
 return (
  <Link
   href={href}
   onClick={onClick}
   className={cn(`text-base text-[#959595]`, className)}
  >
   {children}
  </Link>
 );
}
