"use client";

import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
 CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";

const packages = [
 {
  name: "$50 Package",
  description: "Perfect for beginners",
  features: ["65% return in the first month", "Daily payout (24 days)"],
  price: 50,
 },
 {
  name: "$100 Package",
  description: "Most popular choice",
  features: ["70% return on investment", "Earn more than $2.30 per day"],
  price: 100,
  highlighted: true,
 },
 {
  name: "$200 Package",
  description: "For serious investors",
  features: [
   "Maximize your earnings with a higher return rate",
   "Enjoy consistent profits for 24 days",
  ],
  price: 200,
 },
 {
  name: "Custom Package",
  description: "Tailored for you",
  features: [
   "Tailor your investment to your needs",
   "Speak with our support team",
   "Create a plan that works for you",
  ],
  custom: true,
 },
];

export default function PackagesPage() {
 return (
  <div className="min-h-screen py-20 bg-gradient-to-b from-primary/5">
   <Container>
    <div className="text-center mb-12">
     <h1 className="text-4xl font-bold tracking-tight mb-4">
      Choose Your Investment Package
     </h1>
     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Select a package that suits your financial goals. All plans come with
      daily payouts (excluding Sundays) for 24 days, giving you a steady stream
      of passive income.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     {packages.map((pkg) => (
      <Card
       key={pkg.name}
       className={`relative flex flex-col ${
        pkg.highlighted ? "border-primary shadow-lg shadow-primary/10" : ""
       }`}
      >
       {pkg.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
         Popular Choice
        </div>
       )}

       <CardHeader>
        <CardTitle>{pkg.name}</CardTitle>
        <CardDescription>{pkg.description}</CardDescription>
       </CardHeader>

       <CardContent className="flex-grow">
        <ul className="space-y-2">
         {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
           <Check className="h-5 w-5 text-primary shrink-0" />
           <span className="text-sm">{feature}</span>
          </li>
         ))}
        </ul>
       </CardContent>

       <CardFooter>
        <Button
         className="w-full group"
         variant={pkg.highlighted ? "default" : "outline"}
        >
         {pkg.custom ? "Contact Support" : "Invest Now"}
         <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
       </CardFooter>
      </Card>
     ))}
    </div>

    <div className="mt-12 text-center">
     <h2 className="text-2xl font-semibold mb-4">Ready to Invest?</h2>
     <p className="text-muted-foreground mb-6">
      Select a package, complete your payment, and start earning today!
     </p>
     <Button size="lg" className="px-8">
      Get Started
      <ChevronRight className="ml-2 h-5 w-5" />
     </Button>
    </div>
   </Container>
  </div>
 );
}
