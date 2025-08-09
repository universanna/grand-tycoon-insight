import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent">
            RuneTycoon
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          	<Button variant="secondary" className="text-sm font-medium bg-muted/40 hover:bg-muted/60 border border-border/50 rounded-md focus-visible:ring-2 focus-visible:ring-accent/30">
            Coffee?
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};