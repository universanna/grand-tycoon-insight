import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-[20vh] min-h-[150px] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="text-center space-y-4 w-full max-w-md px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-foreground">
          Do you feel lucky, punk?
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search items..." 
            className="pl-10 bg-background/80 backdrop-blur border-2 border-transparent bg-gradient-to-r from-emerald to-gold bg-clip-border p-[1px] rounded-md"
            style={{
              background: 'linear-gradient(to right, hsl(var(--emerald)), hsl(var(--gold))) border-box, hsl(var(--background)) padding-box',
              border: '2px solid transparent'
            }}
          />
        </div>
      </div>
    </section>
  );
};