import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
 title: string;
 description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
 return (
  <Card className="overflow-hidden border-none bg-white/50 backdrop-blur-sm">
   <CardContent className="p-6">
    <div className="mb-4 flex items-center gap-3">
     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
      <ArrowUpRight className="h-6 w-6 text-white" />
     </div>
     <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground">{description}</p>
   </CardContent>
  </Card>
 );
}
