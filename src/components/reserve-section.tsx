import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Container } from "./layout/container";
import Link from "next/link";

export default function ReserveSection() {
 return (
  <section className="relative overflow-hidden py-20 bg-white ">
   <Container>
    <div className="flex flex-wrap items-center justify-between">
     {/* Background image */}
     <div className="transform">
      <Image
       src="/images/nfts/reserve-nft.avif"
       alt="NFT Character 1"
       width={600}
       height={600}
       className="rounded-2xl w-full xl:h-[400px]"
      />
     </div>

     {/* Content */}
     <div className="max-w-xl">
      <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
       RESERVE AND SELL YOUR NFT EASILY
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">
       Earning income in TreasureNFT is simple: just RESERVE and then TRADE to
       EARN
      </p>
      <Link href={"/auth"}>
       <Button className="rounded-full bg-gradient-to-r from-blue-400 to-teal-400 px-8 py-6 text-lg font-semibold text-white hover:opacity-90">
        SIGN UP NOW
       </Button>
      </Link>
     </div>
    </div>
   </Container>
  </section>
 );
}
