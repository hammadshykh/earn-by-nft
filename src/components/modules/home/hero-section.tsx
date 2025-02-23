import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./feature-card";

export default function HeroSection() {
 return (
  <section className="py-16">
   <div className="grid gap-16 lg:grid-cols-2">
    <div className="space-y-4">
     <h1 className="text-xl font-bold leading-tight md:text-2xl lg:text-4xl">
      Welcome to EarnByNFT The future of NFT-based investments is here!
     </h1>
     <p>
      EarnByNFT offers a secure and innovative platform where users can invest
      in NFTs and earn daily rewards. With transparent processes and a robust
      referral program, you can maximize your earnings effortlessly.
     </p>
     <Button size="lg" className="rounded-full">
      Start Exploring
      <ArrowUpRight className="ml-2 h-5 w-5" />
     </Button>
    </div>
    <div className="grid gap-6">
     <FeatureCard
      title="Multi-Reward"
      description="TreasureNFT leverages a proprietary AI-powered algorithmic trading model, and provides a dual earnings mechanism with trading rewards as well as referral rewards."
     />
     <FeatureCard
      title="Earn Future Value"
      description="TreasureNFT reduces the entry hurdles of the NFT market and expands the boundaries of NFT collection & trading through its innovative AI algorithmic trading process."
     />
    </div>
   </div>
  </section>
 );
}
