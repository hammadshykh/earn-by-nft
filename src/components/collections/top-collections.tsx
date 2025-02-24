import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Collection {
 id: string;
 rank: number;
 name: string;
 image: string;
 price: {
  amount: string;
  currency: string;
 };
 change: {
  value: string;
  isPositive: boolean;
 };
}

interface TopCollectionsProps {
 collections: Collection[];
 onMoreClick?: () => void;
}

export default function TopCollections({
 collections,
 onMoreClick,
}: TopCollectionsProps) {
 return (
  <Card className="border-none bg-white">
   <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
    <div className="space-y-1">
     <h2 className="text-xl font-bold tracking-tight">TOP COLLECTIONS OVER</h2>
     <p className="text-sm text-muted-foreground">Last 24 Hours</p>
    </div>
    <button
     onClick={onMoreClick}
     className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-500 transition-colors hover:bg-blue-100"
    >
     More
    </button>
   </CardHeader>
   <CardContent className="pt-0">
    <div className="space-y-6">
     {collections.map((collection) => (
      <div
       key={collection.id}
       className="flex items-center justify-between border-b border-gray-100 pb-6 last:border-0 last:pb-0"
      >
       <div className="flex items-center gap-4">
        {/* Rank Number */}
        <span className="w-4 text-xl font-medium text-gray-400">
         {collection.rank}
        </span>

        {/* Collection Image */}
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
         <Image
          src={collection.image || "/placeholder.svg"}
          alt={collection.name}
          fill
          className="object-cover"
         />
        </div>

        {/* Collection Info */}
        <div className="space-y-1">
         <h3 className="font-medium">{collection.name}</h3>
         <div className="flex items-center gap-1">
          <Image
           src="/placeholder.svg"
           alt="USDT"
           width={16}
           height={16}
           className="h-4 w-4"
          />
          <span className="text-sm text-gray-500">
           {collection.price.amount}
          </span>
         </div>
        </div>
       </div>

       {/* Price Change */}
       <span className="text-sm font-medium text-emerald-500">
        +{collection.change.value}%
       </span>
      </div>
     ))}
    </div>
   </CardContent>
  </Card>
 );
}
