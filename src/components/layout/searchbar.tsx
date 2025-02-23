import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
 className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
 return (
  <div className={cn("relative w-full max-w-md", className)}>
   <Input
    placeholder="Select"
    className="h-10 w-full rounded-full bg-muted/50 pl-10 pr-4"
   />
   <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  </div>
 );
}
