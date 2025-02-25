"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
// import { useFirebaseAuth } from "@/hooks/use-firebase-auth";
import { Copy, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function ReferralPage() {
 //  const { user } = useFirebaseAuth();
 const dummyReferralCode = "USER123"; // Replace with actual user referral code

 const copyReferralCode = () => {
  navigator.clipboard.writeText(dummyReferralCode);
  toast.success("Referral code copied to clipboard!");
 };

 return (
  <Container className="py-10">
   <div className="max-w-4xl mx-auto space-y-8">
    <div className="text-center space-y-4">
     <h1 className="text-4xl font-bold tracking-tight">
      Earn More with Referrals!
     </h1>
     <p className="text-lg text-muted-foreground">
      Share your unique referral link with friends and family to earn additional
      rewards
     </p>
    </div>

    <Card className="bg-primary/5 border-primary/20">
     <CardHeader>
      <CardTitle>Your Referral Code</CardTitle>
     </CardHeader>
     <CardContent className="space-y-4">
      <div className="flex items-center gap-4">
       <code className="flex-1 p-4 bg-background rounded-lg text-lg font-mono">
        {dummyReferralCode}
       </code>
       <Button onClick={copyReferralCode} variant="outline" size="icon">
        <Copy className="h-4 w-4" />
       </Button>
       <Button variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
       </Button>
      </div>
     </CardContent>
    </Card>

    <div className="grid md:grid-cols-2 gap-6">
     <Card>
      <CardHeader>
       <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
       <div className="space-y-2">
        <div className="flex items-center gap-2">
         <span className="text-primary font-bold">10%</span>
         <p>commission on investments below $500</p>
        </div>
        <div className="flex items-center gap-2">
         <span className="text-primary font-bold">7.5%</span>
         <p>commission on investments $500-$1000</p>
        </div>
        <div className="flex items-center gap-2">
         <span className="text-primary font-bold">5%</span>
         <p>commission on investments above $1000</p>
        </div>
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle>Levels & Rewards</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
       <p>Invite 3 people to reach Level 2!</p>
       <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
        <div className="h-full bg-primary w-1/3" />
       </div>
       <p className="text-sm text-muted-foreground">
        Continue growing your team to unlock greater rewards through our
        multi-level referral system.
       </p>
      </CardContent>
     </Card>
    </div>
   </div>
  </Container>
 );
}
