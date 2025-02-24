import Image from "next/image";

interface NFTThumbnail {
 id: string;
 stakeId: string;
 image: string;
 price: {
  amount: number;
  currency: string;
 };
 profileImage?: string;
}

interface NFTThumbnailListProps {
 items: NFTThumbnail[];
 selectedId?: string;
 onSelect?: (item: NFTThumbnail) => void;
}

export default function NFTThumbnailList({
 items,
 //  selectedId,
 onSelect,
}: NFTThumbnailListProps) {
 return (
  <div className="space-y-4">
   {items.map((item) => (
    <div
     key={item.id}
     className="group flex cursor-pointer items-start gap-4"
     onClick={() => onSelect?.(item)}
    >
     {/* NFT Image */}
     <div className="relative aspect-square w-24 overflow-hidden rounded-2xl">
      <Image
       src={item.image || "/images/nfts/reserve-nft.avif"}
       alt={item.stakeId}
       fill
       className="object-cover"
      />
     </div>

     {/* Info Section */}
     <div className="flex flex-1 items-center justify-between">
      <span className="text-base font-medium">{item.stakeId}</span>

      <div className="flex items-center gap-2">
       {/* Profile Icon */}
       <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-200">
        <Image
         src={item.profileImage || "/images/nfts/reserve-nft.avif"}
         alt="Profile"
         width={24}
         height={24}
         className="h-full w-full object-cover"
        />
       </div>

       {/* Price Tag */}
       <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-1">
        <Image
         src="/images/nfts/reserve-nft.avif"
         alt="USDT"
         width={16}
         height={16}
         className="h-4 w-4"
        />
        <span className="text-sm font-medium text-emerald-500">
         {item.price.amount}
        </span>
       </div>
      </div>
     </div>
    </div>
   ))}
  </div>
 );
}
