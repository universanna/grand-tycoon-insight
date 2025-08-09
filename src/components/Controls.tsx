import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { RefreshCw } from "lucide-react";

export const Controls = () => {
  return (
    <section className="w-full py-6 border-b bg-muted/20">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="min-margin" className="text-sm font-medium">
                Min Margin %
              </Label>
              <Input
                id="min-margin"
                type="number"
                placeholder="5"
                className="w-20 h-8"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Label htmlFor="min-liquidity" className="text-sm font-medium">
                Min Liquidity
              </Label>
              <Input
                id="min-liquidity"
                type="number"
                placeholder="100"
                className="w-20 h-8"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Label htmlFor="max-volatility" className="text-sm font-medium">
                Max Volatility
              </Label>
              <Input
                id="max-volatility"
                type="number"
                placeholder="0.5"
                step="0.1"
                className="w-20 h-8"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="stabilized-moves" />
              <Label htmlFor="stabilized-moves" className="text-sm font-medium">
                Stabilized moves (last 15m)
              </Label>
            </div>

            <Button variant="ghost" size="sm" className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh (5m)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};