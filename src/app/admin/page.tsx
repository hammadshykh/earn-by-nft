"use client";

import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface DashboardStats {
 walletBalance: number;
 dailyIncome: number;
 totalIncome: number;
 activeNFTs: number;
 teamMembers: number;
 activityStake: number;
}

export default function AdminDashboard() {
 const { data: stats, isLoading } = useQuery({
  queryKey: ["dashboard-stats"],
  queryFn: async () => {
   const nftsSnapshot = await getDocs(collection(db, "nfts"));
   const usersSnapshot = await getDocs(collection(db, "users"));

   // Mock data for demonstration - replace with real data from Firebase
   return {
    walletBalance: 1250.5,
    dailyIncome: 25.75,
    totalIncome: 3450.25,
    activeNFTs: nftsSnapshot.size,
    teamMembers: usersSnapshot.size,
    activityStake: 85,
   } as DashboardStats;
  },
 });

 if (isLoading) {
  return (
   <div className="flex items-center justify-center min-h-screen">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
   </div>
  );
 }

 return (
  <div className="container mx-auto px-4 py-8">
   <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

   {/* Wallet Overview */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.walletBalance} ETH</div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Daily Income</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.dailyIncome} ETH</div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Total Income</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.totalIncome} ETH</div>
     </CardContent>
    </Card>
   </div>

   {/* NFT and Team Stats */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Reserved NFTs</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.activeNFTs}</div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Team Members</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.teamMembers}</div>
      <p className="text-xs text-muted-foreground">
       Earn 2.5% profit on every 5 referrals
      </p>
     </CardContent>
    </Card>

    <Card>
     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">Activity Stake</CardTitle>
     </CardHeader>
     <CardContent>
      <div className="text-2xl font-bold">{stats?.activityStake}%</div>
     </CardContent>
    </Card>
   </div>
  </div>
 );
}
