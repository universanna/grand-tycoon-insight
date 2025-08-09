import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isDark = (resolvedTheme ?? theme) === "dark";

  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
