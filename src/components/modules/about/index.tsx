import { Container } from "@/components/layout/container";
import React from "react";

const AboutSection = () => {
 return (
  <section className="py-20 px-4 bg-primary/5">
   <Container>
    <div className="max-w-2xl">
     <h2 className="text-3xl font-bold mb-6">About Us</h2>
     <p className="text-lg text-muted-foreground">
      EarnByNFT is a next-generation NFT-based investment platform designed to
      provide consistent returns to investors. Our vision is to create a
      decentralized and rewarding ecosystem where users can grow their wealth
      effortlessly.
     </p>
    </div>
   </Container>
  </section>
 );
};

export default AboutSection;
