"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const collections = [
 {
  id: 1,
  name: "GiffgaffApeClub",
  image:
   "https://sjc.microlink.io/9PSLXazHeq2VGtknDEkNxJIq7pzmU6G39HFEnvCS3wK9GYf3D0hyfPYzPkzf7yOV8S6QSr-6emryakI6-LtRdA.jpeg",
  price: "3621.27M",
  change: "+2.08%",
 },
 {
  id: 2,
  name: "Wild Girl",
  image: "/placeholder.svg",
  price: "3497.22M",
  change: "+2.13%",
 },
 {
  id: 3,
  name: "Pixels Punk",
  image: "/placeholder.svg",
  price: "3582.27M",
  change: "+2.07%",
 },
];

export default function TopCollections() {
 const [timeframe, setTimeframe] = useState("24h");

 return (
  <Card>
   <CardHeader className="flex flex-row items-center justify-between">
    <CardTitle>Top Collections</CardTitle>
    <div className="flex gap-2">
     <Button
      variant={timeframe === "24h" ? "default" : "outline"}
      size="sm"
      onClick={() => setTimeframe("24h")}
     >
      24h
     </Button>
     <Button
      variant={timeframe === "7d" ? "default" : "outline"}
      size="sm"
      onClick={() => setTimeframe("7d")}
     >
      7d
     </Button>
     <Button
      variant={timeframe === "30d" ? "default" : "outline"}
      size="sm"
      onClick={() => setTimeframe("30d")}
     >
      30d
     </Button>
    </div>
   </CardHeader>
   <CardContent>
    <div className="space-y-4">
     {collections.map((collection, index) => (
      <div
       key={collection.id}
       className="flex items-center justify-between p-2 hover:bg-muted rounded-lg transition-colors"
      >
       <div className="flex items-center gap-4">
        <span className="text-lg font-medium text-muted-foreground w-6">
         {index + 1}
        </span>
        <Image
         src={collection.image || "/placeholder.svg"}
         alt={collection.name}
         width={48}
         height={48}
         className="rounded-full"
        />
        <div>
         <h3 className="font-semibold">{collection.name}</h3>
         <p className="text-sm text-muted-foreground">
          Floor: {collection.price}
         </p>
        </div>
       </div>
       <span className="text-emerald-500 font-medium">{collection.change}</span>
      </div>
     ))}
    </div>
   </CardContent>
  </Card>
 );
}
