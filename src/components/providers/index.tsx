"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import React, { ReactNode } from "react";
import { FirebaseAuthProvider } from "@/hooks/use-firebase-auth";
const Providers = ({ children }: { children: ReactNode }) => {
 return (
  <QueryClientProvider client={queryClient}>
   <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
  </QueryClientProvider>
 );
};

export default Providers;
