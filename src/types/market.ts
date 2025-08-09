export interface MarketItem {
  id: string;
  name: string;
  icon: string;
  members: boolean;
  buyLimit: number;
  buyPrice: number;
  sellPrice: number;
  marginPostTax: number;
  dailyVolume: number;
  liquidityScore: number;
  volatilityScore: number;
  profitMarginPercent: number;
  performanceScore: number;
  riskToReward: number;
}

export interface MarketOpportunity {
  item: MarketItem;
  rank: number;
}