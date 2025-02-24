import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "./layout/container";

interface Creator {
 name: string;
 avatar: string;
}

interface Collection {
 title: string;
 creator: Creator;
 images: string[];
}

export default function FeaturedCollections() {
 const collections: Collection[] = [
  {
   title: "Noxious Audience",
   creator: {
    name: "BLAINE",
    avatar: "/placeholder.svg?height=32&width=32",
   },
   images: [
    "/images/noxious.avif",
    "/images/noxious.avif",
    "/images/noxious.avif",
    "/images/noxious.avif",
   ],
  },
  {
   title: "Giffgaff Ape Club",
   creator: {
    name: "WILLOUGHBY",
    avatar: "/placeholder.svg?height=32&width=32",
   },
   images: [
    "/images/noxious.avif",
    "/images/noxious.avif",
    "/images/noxious.avif",
   ],
  },
  {
   title: "Wild Girl",
   creator: {
    name: "BERNADETTE",
    avatar: "/placeholder.svg?height=32&width=32",
   },
   images: [
    "/images/noxious.avif",
    "/images/noxious.avif",
    "/images/noxious.avif",
   ],
  },
 ];

 return (
  <section className="py-12">
   <Container>
    <h2 className="mb-8 text-3xl font-bold tracking-tight">
     FEATURED NFT COLLECTIBLES
    </h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     {collections.map((collection, index) => (
      <Card key={index} className="overflow-hidden bg-card">
       <CardContent className="p-0">
        <div className="grid grid-cols-2 gap-1">
         <div className="col-span-2">
          <Image
           src={collection.images[0] || "/placeholder.svg"}
           alt={collection.title}
           width={400}
           height={400}
           className="aspect-square object-cover"
          />
         </div>
         {collection.images.slice(1).map((image, i) => (
          <div key={i} className="relative">
           <Image
            src={image || "/placeholder.svg"}
            alt={`${collection.title} preview ${i + 1}`}
            width={200}
            height={200}
            className="aspect-square object-cover"
           />
          </div>
         ))}
        </div>
        <div className="p-4">
         <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           <Image
            src={collection.creator.avatar || "/placeholder.svg"}
            alt={collection.creator.name}
            width={24}
            height={24}
            className="rounded-full"
           />
           <div className="flex items-center gap-2">
            <h3 className="font-semibold">{collection.title}</h3>
            <span className="text-sm text-muted-foreground">
             by {collection.creator.name}
            </span>
           </div>
          </div>
          <Badge
           variant="secondary"
           className="bg-gradient-to-r from-blue-400 to-teal-400 text-white"
          >
           Trade & Earn
          </Badge>
         </div>
        </div>
       </CardContent>
      </Card>
     ))}
    </div>
   </Container>
  </section>
 );
}
