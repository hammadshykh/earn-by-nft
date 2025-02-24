import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NFTCardProps {
 id: string;
 imageUrl?: string;
 title?: string;
 amount: number;
 currency?: string;
 tokenIcon?: string;
 badgeText?: string;
}

export default function NFTCard({
 //  id,
 imageUrl,
 title,
 amount,
 currency = "USDT",
 //  tokenIcon = "/images/noxious.avif",
 badgeText,
}: NFTCardProps) {
 return (
  <Card className="group overflow-hidden bg-white transition-shadow hover:shadow-lg max-w-lg">
   <CardContent className="p-0">
    {/* NFT Image Container */}
    <div className="relative aspect-square w-full">
     <Image
      src={imageUrl || "/placeholder.svg"}
      alt={title || ""}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     />
     {/* Stake Badge */}
     {badgeText && (
      <div className="absolute bottom-3 left-3">
       <Badge
        variant="secondary"
        className="bg-black/50 text-white backdrop-blur-sm"
       >
        {badgeText}
       </Badge>
      </div>
     )}
    </div>

    {/* Card Details */}
    <div className="space-y-2 p-3">
     <h3 className="font-medium text-base">{title}</h3>
     <div className="flex items-center gap-1.5">
      {/* <Image
       src={tokenIcon || "/placeholder.svg"}
       alt={currency}
       width={20}
       height={20}
       className="rounded-full"
      /> */}
      <span className="text-sm font-medium text-emerald-500">
       {amount.toFixed(2)} {currency}
      </span>
     </div>
    </div>
   </CardContent>
  </Card>
 );
}
