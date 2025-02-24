"use client";

import { useState } from "react";
import NFTCard from "../nft/nft-card";
import NFTThumbnailList from "../nft/nft-thumbnail-list";
import TopCollections from "../collections/top-collections";

interface NFT {
 id: string;
 stakeId: string;
 image: string;
 price: {
  amount: number;
  currency: string;
 };
}

const mockNFTs: NFT[] = [
 {
  id: "1",
  stakeId: "Stake_669278",
  image: "/images/noxious.avif",
  price: {
   amount: 569,
   currency: "USDT",
  },
 },
 {
  id: "2",
  stakeId: "Stake_263636",
  image: "/images/noxious.avif",
  price: {
   amount: 870,
   currency: "USDT",
  },
 },
 {
  id: "3",
  stakeId: "Stake_509296",
  image: "/images/noxious.avif",
  price: {
   amount: 752,
   currency: "USDT",
  },
 },
];

const mockCollections = [
 {
  id: "1",
  rank: 1,
  name: "Wild Girl",
  image: "/images/noxious.avif",
  price: {
   amount: "3571.81M",
   currency: "USDT",
  },
  change: {
   value: "2.13",
   isPositive: true,
  },
 },
 {
  id: "2",
  rank: 2,
  name: "PEPE Frog Nobility",
  image: "/images/noxious.avif",
  price: {
   amount: "3667.43M",
   currency: "USDT",
  },
  change: {
   value: "2.07",
   isPositive: true,
  },
 },
 {
  id: "3",
  rank: 3,
  name: "Pixels Punk",
  image: "/images/noxious.avif",
  price: {
   amount: "3656.46M",
   currency: "USDT",
  },
  change: {
   value: "2.07",
   isPositive: true,
  },
 },
 {
  id: "4",
  rank: 4,
  name: "Giffgaff Ape Club",
  image: "/images/noxious.avif",
  price: {
   amount: "3694.74M",
   currency: "USDT",
  },
  change: {
   value: "2.03",
   isPositive: true,
  },
 },
 {
  id: "5",
  rank: 5,
  name: "Cool APE",
  image: "/images/noxious.avif",
  price: {
   amount: "3618.94M",
   currency: "USDT",
  },
  change: {
   value: "2.07",
   isPositive: true,
  },
 },
];

export default function NFTShowcase() {
 const [selectedNFT, setSelectedNFT] = useState<NFT>(mockNFTs[0]);

 return (
  <section className="container mx-auto px-4 py-16">
   <div className="grid gap-8 lg:grid-cols-[2fr,1fr,1fr]">
    {/* Main NFT Display */}
    <div className="min-h-[400px]">
     <NFTCard
      id={selectedNFT.stakeId}
      amount={selectedNFT.price.amount}
      currency={selectedNFT.price.currency}
      imageUrl={selectedNFT.image}
      tokenIcon={selectedNFT.stakeId}
     />
    </div>

    {/* NFT Thumbnails */}
    <div>
     <NFTThumbnailList
      items={mockNFTs}
      selectedId={selectedNFT.id}
      onSelect={(nft) => setSelectedNFT(nft)}
     />
    </div>

    {/* Collections Ranking */}
    <div>
     <TopCollections
      collections={mockCollections}
      onMoreClick={() => console.log("More clicked")}
     />
    </div>
   </div>
  </section>
 );
}
