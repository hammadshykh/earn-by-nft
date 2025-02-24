import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export function generateReferralCode(): string {
 // Generate an 8-character referral code
 return nanoid(8).toUpperCase();
}

export async function copyToClipboard(text: string) {
 try {
  await navigator.clipboard.writeText(text);
  return true;
 } catch (err) {
  console.error("Failed to copy text: ", err);
  return false;
 }
}
