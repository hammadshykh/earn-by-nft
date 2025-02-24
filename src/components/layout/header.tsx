"use client";
import Image from "next/image";
import { Bell, Menu, MessageCircle } from "lucide-react";
import { ConnectWalletButton } from "@/components/wallet/connect-wallet-button";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLinks from "./nav-links";
import SearchBar from "./searchbar";
import { MobileNav } from "./MobileNav";
import { ServiceDropdown } from "../ui/service-dropdown";
import { useFirebaseAuth } from "@/hooks/use-firebase-auth";
import Link from "next/link";

export default function Header() {
 const { user, logout } = useFirebaseAuth();
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
     <Button variant="ghost" size="icon" className="lg:hidden">
      <Menu className="h-5 w-5" />
     </Button>
     <div className="flex items-center gap-4">
      {user ? (
       <>
        <ConnectWalletButton />
        <DropdownMenu>
         <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
           <User className="h-4 w-4" />
          </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
           <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
         </DropdownMenuContent>
        </DropdownMenu>
       </>
      ) : (
       <Link href="/auth">
        <Button>Login</Button>
       </Link>
      )}
     </div>
     <div>
      <ServiceDropdown />
     </div>
    </div>
   </div>
  </header>
 );
}
