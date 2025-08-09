import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-[20vh] min-h-[150px] flex items-center justify-center bg-background overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--foreground) / 0.6) 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      <div className="text-center space-y-4 w-full max-w-md px-4">
        <div className="relative group w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
            style={{
              padding: "1px",
              background:
                "linear-gradient(to right, hsl(217, 91%, 60%), hsl(188, 78%, 56%))",
              borderRadius: "0.375rem",
            }}
          >
            <div className="h-full w-full rounded-md bg-background" />
          </div>
          <Input
            placeholder="Search items..."
            className="relative z-10 pl-10 bg-background/80 backdrop-blur border border-border rounded-md focus-visible:ring-2 focus-visible:ring-accent/30"
          />
        </div>
      </div>
    </section>
  );
};