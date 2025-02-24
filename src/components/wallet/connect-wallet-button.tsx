"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ConnectWalletButton() {
 const [connected, setConnected] = useState(false);

 const handleConnect = () => {
  toast("Wallet Connection", {
   description:
    "This is a mock wallet connection. In a real app, this would connect to MetaMask or WalletConnect.",
  });
  setConnected(true);
 };

 return (
  <Button variant={connected ? "outline" : "default"} onClick={handleConnect}>
   {connected ? "0x1234...5678" : "Connect Wallet"}
  </Button>
 );
}
