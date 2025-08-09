import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent">
            RuneTycoon
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" className="text-sm font-medium">
            DOES NOTHING
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};