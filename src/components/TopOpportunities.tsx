import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockMarketData } from "@/data/mockData";
import { MarketItem } from "@/types/market";

const OpportunityCard = ({ item, rank }: { item: MarketItem; rank: number }) => {
  return (
    <Card className="group hover:scale-[1.01] transition-all duration-200 hover:shadow-lg border-border/50">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                {item.members && (
                  <Badge variant="secondary" className="text-xs px-1 py-0">
                    M
                  </Badge>
                )}
                {item.smartPriceSignal && (
                  <Badge className="text-xs px-1 py-0 bg-emerald text-emerald-foreground">
                    Signal
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">
              {item.performanceScore}
            </div>
            <div className="text-xs text-muted-foreground">Score</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-muted-foreground">Margin:</span>
            <div className="font-medium text-emerald">
              {item.profitMarginPercent.toFixed(2)}%
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Liquidity:</span>
            <div className="font-medium">
              {(item.liquidityScore * 100).toFixed(0)}%
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">Volatility:</span>
            <div className="font-medium">
              {(item.volatilityScore * 100).toFixed(0)}%
            </div>
          </div>
          <div>
            <span className="text-muted-foreground">R2R:</span>
            <div className="font-medium">
              {item.riskToReward.toFixed(3)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const TopOpportunities = () => {
  const topItems = mockMarketData.slice(0, 10);

  return (
    <section className="w-full py-8">
      <div className="container px-4">
        <h2 className="text-2xl font-semibold mb-6">Top 10 Market Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topItems.map((item, index) => (
            <OpportunityCard key={item.id} item={item} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};