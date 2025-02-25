"use client";

import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function ServiceDropdown() {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" className="flex items-center gap-2">
     <Menu className="h-4 w-4" />
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end">
    <DropdownMenuItem>NFT Investment</DropdownMenuItem>
    <DropdownMenuItem>Daily Rewards</DropdownMenuItem>
    <DropdownMenuItem>Referral Program</DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
