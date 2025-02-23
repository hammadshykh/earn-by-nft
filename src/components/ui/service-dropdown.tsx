import {
 Headphones,
 CircleDot,
 Wallet,
 MessageSquare,
 Shield,
} from "lucide-react";

import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ServiceDropdown() {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon" className="text-lg">
     <span className="sr-only">Open menu</span>
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
     >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
     </svg>
    </Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent align="end" className="w-[200px]">
    <DropdownMenuItem className="flex items-center gap-2 py-3">
     <Headphones className="h-5 w-5" />
     <span>Service</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="flex items-center gap-2 py-3 bg-blue-50 dark:bg-blue-950">
     <CircleDot className="h-5 w-5" />
     <span>Account</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="flex items-center gap-2 py-3">
     <Wallet className="h-5 w-5" />
     <span>Wallet</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="flex items-center gap-2 py-3">
     <MessageSquare className="h-5 w-5" />
     <span>Message</span>
    </DropdownMenuItem>
    <DropdownMenuItem className="flex items-center gap-2 py-3">
     <Shield className="h-5 w-5" />
     <span>Security TAP</span>
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}
