import NFTCard from "./nft-card";

interface NFTCardProps {
 nfts: {
  id: string;
  imageUrl?: string;
  title?: string;
  amount: number;
  currency?: string;
  tokenIcon?: string;
  badgeText?: string;
 };
}

export default function NFTList({ nfts }: NFTCardProps) {
 return (
  <div className="p-4">
   <div className="mx-auto max-w-xs">
    <NFTCard {...nfts} />
   </div>
  </div>
 );
}
