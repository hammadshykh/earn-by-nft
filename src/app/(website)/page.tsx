// import HeroSection from "@/components/modules/home/hero-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import VideoSection from "@/components/video-section";
import DiscoverSection from "@/components/discover-section";
import ReserveSection from "@/components/reserve-section";
import HeroSection from "@/components/modules/home/hero-section";
import NFTShowcase from "@/components/nft/nft-showcase";

export default function HomePage() {
 return (
  <div className="min-h-screen">
   {/* Hero Section */}
   <HeroSection />
   <NFTShowcase />
   {/* Features Section */}
   {/* <FeaturedCollections /> */}
   <ReserveSection />
   <DiscoverSection />
   {/* Video Section */}
   <VideoSection />

   {/* About Section */}

   {/* CTA Section */}
   <section className="py-20 px-4 text-center">
    <div className="container mx-auto">
     <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
     <p className="text-lg text-muted-foreground mb-8">
      Join thousands of investors already growing their wealth with EarnByNFT
     </p>
     <Link href="/auth">
      <Button size="lg" className="text-lg px-8">
       Create Account
      </Button>
     </Link>
    </div>
   </section>
  </div>
 );
}
