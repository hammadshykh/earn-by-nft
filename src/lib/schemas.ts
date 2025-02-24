import { z } from "zod";

export interface User {
 id: string;
 email: string;
 walletAddress?: string | null;
 teamMembers?: string[];
 totalEarnings: number;
 dailyEarnings: number;
 activityStake: number;
}

export interface NFT {
 id: string;
 name: string;
 description: string;
 imageUrl: string;
 price: number;
 dailyReward: number;
 seller: string;
 category: string;
 listed: boolean;
 reservedBy?: string | null;
 metadata: Record<string, string>;
}

export interface TeamMember {
 id: string;
 email: string;
 joinedAt: Date;
 totalInvestment: number;
 referredBy: string;
}

export const nftSchema = z.object({
 name: z.string().min(1, "Name is required"),
 description: z.string().min(1, "Description is required"),
 imageUrl: z.string().url("Must be a valid URL"),
 price: z.number().positive("Price must be positive"),
 dailyReward: z.number().positive("Daily reward must be positive"),
 seller: z.string(),
 category: z.string(),
 listed: z.boolean(),
 reservedBy: z.string().nullable().optional(),
 metadata: z.record(z.any()),
});

export type InsertNFT = z.infer<typeof nftSchema>;
