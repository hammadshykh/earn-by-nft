"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./layout/container";

export default function VideoSection() {
 const [isPlaying, setIsPlaying] = useState(false);
 const [isMuted, setIsMuted] = useState(false);
 const videoRef = useRef<HTMLVideoElement>(null);

 const togglePlay = () => {
  if (videoRef.current) {
   if (isPlaying) {
    videoRef.current.pause();
   } else {
    videoRef.current.play();
   }
   setIsPlaying(!isPlaying);
  }
 };

 const toggleMute = () => {
  if (videoRef.current) {
   videoRef.current.muted = !isMuted;
   setIsMuted(!isMuted);
  }
 };

 const toggleFullscreen = () => {
  if (videoRef.current) {
   if (document.fullscreenElement) {
    document.exitFullscreen();
   } else {
    videoRef.current.requestFullscreen();
   }
  }
 };

 return (
  <div className="relative px-4 py-12 md:px-6 bg-white">
   <Container className="max-w-7xl">
    <div className="relative overflow-hidden rounded-lg bg-black">
     {/* Video */}
     <video
      ref={videoRef}
      className="aspect-video w-full"
      // poster="/video/nft-video.mp4"
     >
      <source src="/video/nft-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
     </video>

     {/* Gradient Overlay */}
     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

     {/* Welcome Text */}
     <div className="absolute bottom-16 left-0 right-0 text-center text-white">
      <h2 className="text-2xl font-bold md:text-3xl">
       Welcome to Treasure NFT, the world&apos;s gateway
      </h2>
     </div>

     {/* Controls */}
     <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-black/60 p-4">
      <Button
       variant="ghost"
       size="icon"
       className="text-white hover:bg-white/20"
       onClick={togglePlay}
      >
       {isPlaying ? (
        <Pause className="h-6 w-6" />
       ) : (
        <Play className="h-6 w-6" />
       )}
      </Button>

      <Button
       variant="ghost"
       size="icon"
       className="text-white hover:bg-white/20"
       onClick={toggleMute}
      >
       {isMuted ? (
        <VolumeX className="h-6 w-6" />
       ) : (
        <Volume2 className="h-6 w-6" />
       )}
      </Button>

      <div className="flex-1" />

      <Button
       variant="ghost"
       size="icon"
       className="text-white hover:bg-white/20"
       onClick={toggleFullscreen}
      >
       <Maximize className="h-6 w-6" />
      </Button>
     </div>
    </div>
   </Container>
  </div>
 );
}
