import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "./container";

export default function Footer() {
 return (
  <footer className="border-t bg-white">
   <Container>
    <div className="py-12">
     <div className="flex xl:flex-row flex-col items-start justify-between gap-10">
      {/* Logo Section */}
      <div className="space-y-4">
       <Image
        src="/images/logo.png"
        alt="TreasureNFT"
        width={200}
        height={100}
        className="h-10 w-auto"
       />
       <p className="text-muted-foreground">
        TreasureNFT is a Web3 revenue platform based on NFT collections
       </p>
      </div>

      {/* Resources Section */}
      <div>
       <h3 className="mb-4 text-lg font-semibold">Resources</h3>
       <ul className="space-y-3">
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          Docs
         </Link>
        </li>
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          Invite friends
         </Link>
        </li>
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          How to buy
         </Link>
        </li>
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          Tutorials
         </Link>
        </li>
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          Artist Application Form
         </Link>
        </li>
       </ul>
      </div>

      {/* News Section */}
      <div>
       <h3 className="mb-4 text-lg font-semibold">News</h3>
       <ul className="space-y-3">
        <li>
         <Link href="#" className="text-muted-foreground hover:text-foreground">
          Blog
         </Link>
        </li>
       </ul>
      </div>

      {/* Company Section */}
      <div className="space-y-6 max-w-md">
       <div>
        <h3 className="mb-4 text-lg font-semibold">Company</h3>
        <p className="text-muted-foreground">
         Join our mailing list to stay in the loop with our newest feature
         releases, NFT listing, tips and tricks for navigating Treasure webpage.
        </p>
        <div className="mt-4 flex gap-2">
         <Input
          type="email"
          placeholder="Enter your email address"
          className="rounded-full"
         />
         <Button className="rounded-full bg-gradient-to-r from-[#77E3FB] to-[#99FAC6]">
          Submit
         </Button>
        </div>
       </div>

       <div className="space-y-4">
        <h3 className="text-lg font-semibold">Download</h3>
        <div className="flex flex-wrap gap-4">
         <Link
          href="#"
          className="rounded-full bg-[#77E3FB] px-6 py-2 text-white hover:opacity-90"
         >
          APP Store
         </Link>
         <Link
          href="#"
          className="rounded-full bg-[#99FAC6] px-6 py-2 text-white hover:opacity-90"
         >
          Google Play
         </Link>
         <Link
          href="#"
          className="rounded-full bg-[#FFB7B7] px-6 py-2 text-white hover:opacity-90"
         >
          APK
         </Link>
        </div>
       </div>
      </div>
     </div>

     {/* Bottom Section */}
     <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground md:flex-row">
      <p>© 2023 - TreasureMeta Technology, Inc</p>
      <div className="flex gap-6">
       <Link href="#" className="hover:text-foreground">
        Privacy Policy
       </Link>
       <Link href="#" className="hover:text-foreground">
        Terms of service
       </Link>
      </div>
     </div>
    </div>
   </Container>
  </footer>
 );
}
