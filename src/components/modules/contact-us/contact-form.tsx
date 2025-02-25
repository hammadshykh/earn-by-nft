"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const contactFormSchema = z.object({
 name: z.string().min(2, {
  message: "Name must be at least 2 characters.",
 }),
 email: z.string().email({
  message: "Please enter a valid email address.",
 }),
 message: z.string().min(10, {
  message: "Message must be at least 10 characters.",
 }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/contact-form-action";

export default function ContactForm() {
 const form = useForm<ContactFormValues>({
  resolver: zodResolver(contactFormSchema),
  defaultValues: {
   name: "",
   email: "",
   message: "",
  },
 });

 async function onSubmit(values: ContactFormValues) {
  try {
   const result = await submitContactForm(values);
   if (result.success) {
    toast.success("Message sent successfully!");
    form.reset();
   }
  } catch (error) {
   toast.error("Something went wrong. Please try again.");
   console.log(error);
  }
 }

 return (
  <Card className="p-6">
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
     <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
         <Input placeholder="Your name" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
         <Input type="email" placeholder="your@email.com" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Message</FormLabel>
        <FormControl>
         <Textarea placeholder="How can we help you?" rows={4} {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
     <Button
      type="submit"
      className="w-full"
      disabled={form.formState.isSubmitting}
     >
      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
     </Button>
    </form>
   </Form>
  </Card>
 );
}
