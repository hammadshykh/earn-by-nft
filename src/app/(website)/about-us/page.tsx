"use client";

import { Container } from "@/components/layout/container";
import WhyChooseUs from "@/components/why-choose-us";

export default function AboutPage() {
 const vision =
  "Our vision is to democratize investment in NFTs and make it accessible to everyone, regardless of technical skills or experience. We manage the NFTs for you, ensuring you get daily profits without the complexity.";
 const mission =
  "At EarnByNFT, we strive to provide a simple yet effective way for everyone to earn passive income. We believe that everyone should have the opportunity to grow their wealth in today's digital age, and NFTs provide a great opportunity for that. Our platform takes care of everything, so you can earn without any hassle.";
 return (
  <div className="min-h-screen py-16">
   <div className="space-y-12">
    <Container>
     {/* Header Section */}
     <section className="text-center">
      <div className="space-y-4">
       <h2 className="text-2xl font-semibold">Who We Are</h2>
       <p className="text-lg text-muted-foreground">
        Empowering individuals to earn passive income through the world of NFTs.
       </p>
      </div>
     </section>

     {/* Mission Section */}
     <section>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg text-muted-foreground">{mission}</p>
     </section>

     {/* Vision Section */}
     <section>
      <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
      <p className="text-lg text-muted-foreground">{vision}</p>
     </section>
    </Container>

    {/* Why Choose Us Section */}
    <div>
     <WhyChooseUs />
    </div>
   </div>
  </div>
 );
}
