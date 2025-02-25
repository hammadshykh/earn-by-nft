"use client";

import { Container } from "@/components/layout/container";
import ContactForm from "@/components/modules/contact-us/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

export default function ContactPage() {
 const getInTouchText =
  " We're here to help! Whether you're interested in our investment packages, need support with your account, or have any other questions, feel free to contact us.";
 return (
  <Container className="py-24">
   <div className="max-w-3xl mx-auto">
    <div className="text-center mb-12">
     <h1 className="text-4xl font-bold mb-4">Get in Touch with Us!</h1>
     <p className="text-lg text-muted-foreground">{getInTouchText}</p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
     <ContactForm />
     <div className="space-y-6">
      <div>
       <h2 className="text-xl font-semibold mb-2">Email</h2>
       <p className="text-muted-foreground">
        For inquiries, email us at:{" "}
        <a
         href="mailto:info@earnbynft.com"
         className="text-primary hover:underline"
        >
         info@earnbynft.com
        </a>
       </p>
      </div>

      <div>
       <h2 className="text-xl font-semibold mb-2">Support</h2>
       <p className="text-muted-foreground">
        If you need help with your account or referral rewards use our live chat
        feature on the homepage or drop us a message and well get back to you
        ASAP.
       </p>
      </div>

      <Card className="p-6 bg-primary/5">
       <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="h-6 w-6 text-primary" />
        <h3 className="font-semibold">Live Chat Support</h3>
       </div>
       <p className="text-sm text-muted-foreground mb-4">
        Our support team is available 24/7 to assist you with any questions or
        concerns.
       </p>
       <Button variant="outline" className="w-full">
        Start Chat
       </Button>
      </Card>
     </div>
    </div>
   </div>
  </Container>
 );
}
