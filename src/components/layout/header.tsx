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
     <Button variant="ghost" size="icon" className="text-muted-foreground">
      <Bell className="h-5 w-5" />
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
        <DropdownMenu>
         <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
           {user.photoURL ? (
            <Image
             src={user.photoURL}
             alt={user.displayName || "User"}
             width={24}
             height={24}
             className="rounded-full"
            />
           ) : (
            <User className="h-4 w-4" />
           )}
           <span className="hidden md:inline">
            {user.displayName || user.email?.split("@")[0]}
           </span>
          </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-56">
          <div className="p-2">
           <p className="text-sm font-medium">{user.displayName}</p>
           <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <DropdownMenuItem asChild>
           <ConnectWalletButton />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
           <Link href="/admin">Dashboard</Link>
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
