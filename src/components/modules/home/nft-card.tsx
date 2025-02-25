"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface NFTCardProps {
 mainImage: string;
 previewImages: string[];
 title: string;
 creator: string;
 totalItems?: number;
 className?: string;
}

export function NFTCard({
 mainImage,
 previewImages,
 title,
 creator,
 totalItems,
 className,
}: NFTCardProps) {
 return (
  <div
   className={cn(
    "relative overflow-hidden rounded-xl border-none border transition-all duration-300",
    className
   )}
  >
   {/* Main Image */}
   <div className="">
    <Image
     src={mainImage}
     alt={title}
     width={320}
     height={320}
     className="object-cover"
    />
   </div>

   {/* Preview Images */}
   <div className="absolute right-0 top-0 flex flex-col gap-2">
    {previewImages.slice(0, 3).map((preview, index) => (
     <div
      key={index}
      className="h-[100px] w-[100px] overflow-hidden rounded-lg border-2 border-white shadow-lg bg-white transform transition-transform duration-300 "
     >
      <Image
       src={preview}
       alt={`${title} preview ${index + 1}`}
       width={60}
       height={60}
       className="h-full w-full object-cover"
      />
     </div>
    ))}
   </div>

   {/* Info */}
   <div className="p-4">
    <h3 className="text-lg font-semibold tracking-tight mb-2">{title}</h3>
    <div className="flex items-center justify-between">
     <p className="text-sm text-muted-foreground">
      by <span className="font-medium">{creator}</span>
     </p>
     {totalItems && (
      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
       Total {totalItems} items
      </span>
     )}
    </div>
   </div>
  </div>
 );
}
