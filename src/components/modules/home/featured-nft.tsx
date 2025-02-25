"use client";

import { Container } from "@/components/layout/container";
import { NFTCard } from "./nft-card";

const FEATURED_NFTS = [
 {
  mainImage: "/images/noxious.avif",
  previewImages: [
   "/images/noxious.avif",
   "/images/noxious.avif",
   "/images/noxious.avif",
  ],
  title: "Stake",
  creator: "Stake",
  totalItems: 5000,
 },
 {
  mainImage: "/images/noxious.avif",
  previewImages: [
   "/images/noxious.avif",
   "/images/noxious.avif",
   "/images/noxious.avif",
  ],
  title: "Giffgaff Ape Club",
  creator: "WILLOUGHBY",
  totalItems: 3333,
 },
 {
  mainImage: "/images/noxious.avif",
  previewImages: [
   "/images/noxious.avif",
   "/images/noxious.avif",
   "/images/noxious.avif",
  ],
  title: "PunkCat",
  creator: "WINFRED",
  totalItems: 2500,
 },
];

export function FeaturedNFTs() {
 return (
  <section className="py-16 bg-slate-50/50">
   <Container>
    <h2 className="md:text-4xl text-2xl font-bold tracking-tight uppercase mb-10">
     Featured NFT Collectibles
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {FEATURED_NFTS.map((nft, index) => (
      <NFTCard
       key={index}
       mainImage={nft.mainImage}
       previewImages={nft.previewImages}
       title={nft.title}
       creator={nft.creator}
       totalItems={nft.totalItems}
      />
     ))}
    </div>
   </Container>
  </section>
 );
}
