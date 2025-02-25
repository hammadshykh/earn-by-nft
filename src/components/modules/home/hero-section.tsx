import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "./feature-card";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export default function HeroSection() {
 const text =
  "We offer easy-to-understand investment packages that help you earn passive income daily. Whether you're new to NFTs or a seasoned investor, we've got a plan for you. Invest in our different packages, and watch your earnings grow daily, with zero effort on your part!";
 return (
  <section className="relative py-20 lg:py-40 overflow-hidden bg-gradient-to-b from-primary/5">
   <Container>
    <div className="grid gap-16 lg:grid-cols-2">
     <div className="relative z-10 space-y-8">
      <div className="space-y-6">
       <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
        Welcome to EarnByNFT
       </h1>
       <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
        {text}
       </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
       <Link href="/auth">
        <Button
         size="lg"
         className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        >
         Start Exploring
         <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
       </Link>
       <Link href="/marketplace">
        <Button
         variant="outline"
         size="lg"
         className="transition-all duration-300 hover:bg-primary/5"
        >
         View Marketplace
        </Button>
       </Link>
      </div>
     </div>
     <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent rounded-3xl -rotate-1" />
      <div className="relative grid gap-6 p-4">
       <FeatureCard
        title="Multi-Reward System"
        description="TreasureNFT leverages a proprietary AI-powered algorithmic trading model, providing dual earnings through trading and referral rewards."
        // className="translate-y-4 hover:translate-y-2 transition-transform duration-300"
       />
       <FeatureCard
        title="Earn Future Value"
        description="TreasureNFT reduces entry hurdles to the NFT market and expands trading possibilities through innovative AI algorithmic trading."
        // className="-translate-y-4 hover:-translate-y-6 transition-transform duration-300"
       />
      </div>
     </div>
    </div>
   </Container>
  </section>
 );
}
