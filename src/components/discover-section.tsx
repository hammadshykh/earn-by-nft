"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import NFTCard from "./nft/nft-card";
import { nftData } from "@/constant/nfts";
import { Container } from "./layout/container";

const categories = [
 { id: "stake", label: "Stake" },
 { id: "polygon", label: "PolygonNFT" },
 { id: "art", label: "Art" },
 { id: "collectibles", label: "Collectibles" },
];

export default function DiscoverSection() {
 const [activeCategory, setActiveCategory] = useState("stake");

 const filteredNFTs =
  activeCategory === "all"
   ? nftData
   : nftData.filter((nft) => nft.type === activeCategory);

 return (
  <section className="py-12 bg-gradient-to-br from-[#FAF5FF] via-[#FDFDEA] to-[#E3FDFD]">
   <Container>
    <div className="mb-8 flex items-center justify-between">
     <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
      DISCOVER MORE NFTS
     </h2>
     <Button
      variant="outline"
      size="sm"
      className="hidden sm:flex items-center gap-2"
     >
      <SlidersHorizontal className="h-4 w-4" />
      All Filters
     </Button>
    </div>

    <div className="mb-8 flex items-center justify-between">
     <Tabs
      defaultValue="stake"
      className="w-full"
      onValueChange={setActiveCategory}
     >
      <TabsList className="h-9 w-full justify-start gap-2 bg-transparent p-0">
       {categories.map((category) => (
        <TabsTrigger
         key={category.id}
         value={category.id}
         className="rounded-full bg-white/50 px-4 py-2 data-[state=active]:bg-primary/20"
        >
         {category.label}
        </TabsTrigger>
       ))}
      </TabsList>
     </Tabs>
     <Button variant="outline" size="sm" className="sm:hidden">
      <SlidersHorizontal className="h-4 w-4" />
     </Button>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
     {filteredNFTs.map((nft) => (
      <NFTCard key={nft.id} {...nft} badgeText="Stake" />
     ))}
    </div>
   </Container>
  </section>
 );
}
