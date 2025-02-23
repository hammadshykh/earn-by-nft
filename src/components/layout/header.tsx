"use client";

import Image from "next/image";
import { Bell, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./nav-links";
import SearchBar from "./searchbar";
import { MobileNav } from "./MobileNav";
import { ServiceDropdown } from "../ui/service-dropdown";

export default function Header() {
 return (
  <header className="sticky top-0 z-50 border-b bg-white backdrop-blur-sm">
   <div className="container mx-auto flex h-16 items-center justify-between px-4">
    <div className="flex items-center gap-8">
     <Image
      src="/images/logo.png"
      alt="TreasureNFT"
      width={200}
      height={100}
      className="h-10 w-auto"
     />
    </div>
    <NavLinks className="hidden lg:flex" />
    <div className="md:hidden block">
     <MobileNav />
    </div>

    <SearchBar className="hidden md:block" />

    <div className="hidden md:flex items-center gap-3">
     <Button variant="ghost" className="text-muted-foreground">
      <Bell className="h-10 w-10" />
     </Button>
     <Button variant="ghost" size="icon" className="text-muted-foreground">
      <MessageCircle className="h-5 w-5" />
     </Button>
     <Button
      size="sm"
      className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
     >
      Airdrop
     </Button>
     {/* <Button variant="ghost" size="icon" className="text-muted-foreground">
      <Globe className="h-5 w-5" />
     </Button> */}
     <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className="h-5 w-5" />
     </Button>
     <div>
      <ServiceDropdown />
     </div>
    </div>
   </div>
  </header>
 );
}
