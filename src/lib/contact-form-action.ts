"use server";

import { ContactFormValues } from "@/components/modules/contact-us/contact-form";

export async function submitContactForm(values: ContactFormValues) {
 // Simulate API delay
 await new Promise((resolve) => setTimeout(resolve, 1000));

 // Here you would typically send the data to your API/database
 console.log("Form submitted:", values);

 return { success: true };
}
