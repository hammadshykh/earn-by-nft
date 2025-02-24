import React from "react";
import { Container } from "./layout/container";
import FeatureCard from "./modules/home/feature-card";

const WhyChooseUs = () => {
 return (
  <section className="py-20 px-4 bg-background">
   <Container>
    <h2 className="text-3xl font-bold text-center mb-12">
     Why Choose EarnByNFT?
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
     <FeatureCard
      title="Daily Profits"
      description="Earn stable daily rewards on your investments"
     />
     <FeatureCard
      title="Secure & Transparent"
      description="A trusted platform with complete transparency"
     />
     <FeatureCard
      title="Referral Bonuses"
      description="Grow your income by inviting friends"
     />
     <FeatureCard
      title="Exclusive NFTs"
      description="Own unique digital assets with long-term value"
     />
    </div>
   </Container>
  </section>
 );
};

export default WhyChooseUs;
