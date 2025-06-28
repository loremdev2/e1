import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
   <div>
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant="elevated"> 
          Button 1
        </Button>
      </div>
      <div className="flex">
        <Input placeholder="Type something..." />
        <Input placeholder="Type something else..." />
        
      </div>

      <div className="flex gap-x-3">
        <Progress value={50} className="w-full ml-4" />
        <Textarea placeholder="Type something..." />
        <Textarea placeholder="Type something else..." />
      </div>
   </div>
   </div>
  );
}
