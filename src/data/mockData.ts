import { MarketItem } from "@/types/market";

export const mockMarketData: MarketItem[] = [
  {
    id: "1",
    name: "Dragon bones",
    icon: "🦴",
    members: true,
    buyLimit: 18000,
    buyPrice: 2850,
    sellPrice: 2920,
    marginPostTax: 67,
    dailyVolume: 145000,
    liquidityScore: 0.92,
    volatilityScore: 0.15,
    profitMarginPercent: 2.35,
    performanceScore: 8.7,
    riskToReward: 0.064,
    smartPriceSignal: true
  },
  {
    id: "2",
    name: "Rune scimitar",
    icon: "⚔️",
    members: false,
    buyLimit: 125,
    buyPrice: 14750,
    sellPrice: 15200,
    marginPostTax: 428,
    dailyVolume: 8900,
    liquidityScore: 0.67,
    volatilityScore: 0.28,
    profitMarginPercent: 2.89,
    performanceScore: 8.1,
    riskToReward: 0.097
  },
  {
    id: "3",
    name: "Yew logs",
    icon: "🪵",
    members: false,
    buyLimit: 1500,
    buyPrice: 310,
    sellPrice: 325,
    marginPostTax: 14,
    dailyVolume: 78000,
    liquidityScore: 0.85,
    volatilityScore: 0.22,
    profitMarginPercent: 4.52,
    performanceScore: 7.9,
    riskToReward: 0.049
  },
  {
    id: "4",
    name: "Magic logs",
    icon: "🪵",
    members: true,
    buyLimit: 300,
    buyPrice: 1150,
    sellPrice: 1200,
    marginPostTax: 47,
    dailyVolume: 24000,
    liquidityScore: 0.73,
    volatilityScore: 0.31,
    profitMarginPercent: 4.09,
    performanceScore: 7.6,
    riskToReward: 0.076
  },
  {
    id: "5",
    name: "Coal",
    icon: "⚫",
    members: false,
    buyLimit: 1000,
    buyPrice: 185,
    sellPrice: 195,
    marginPostTax: 9,
    dailyVolume: 156000,
    liquidityScore: 0.94,
    volatilityScore: 0.18,
    profitMarginPercent: 4.86,
    performanceScore: 7.5,
    riskToReward: 0.037
  },
  {
    id: "6",
    name: "Adamant ore",
    icon: "🟢",
    members: false,
    buyLimit: 500,
    buyPrice: 985,
    sellPrice: 1050,
    marginPostTax: 62,
    dailyVolume: 32000,
    liquidityScore: 0.71,
    volatilityScore: 0.25,
    profitMarginPercent: 6.19,
    performanceScore: 7.3,
    riskToReward: 0.040
  },
  {
    id: "7",
    name: "Lobster",
    icon: "🦞",
    members: false,
    buyLimit: 1000,
    buyPrice: 220,
    sellPrice: 235,
    marginPostTax: 14,
    dailyVolume: 89000,
    liquidityScore: 0.88,
    volatilityScore: 0.19,
    profitMarginPercent: 6.36,
    performanceScore: 7.2,
    riskToReward: 0.030
  },
  {
    id: "8",
    name: "Shark",
    icon: "🦈",
    members: true,
    buyLimit: 300,
    buyPrice: 850,
    sellPrice: 890,
    marginPostTax: 37,
    dailyVolume: 45000,
    liquidityScore: 0.76,
    volatilityScore: 0.33,
    profitMarginPercent: 4.33,
    performanceScore: 7.0,
    riskToReward: 0.076
  },
  {
    id: "9",
    name: "Monkfish",
    icon: "🐟",
    members: true,
    buyLimit: 1000,
    buyPrice: 385,
    sellPrice: 405,
    marginPostTax: 19,
    dailyVolume: 67000,
    liquidityScore: 0.82,
    volatilityScore: 0.27,
    profitMarginPercent: 4.94,
    performanceScore: 6.9,
    riskToReward: 0.055
  },
  {
    id: "10",
    name: "Maple logs",
    icon: "🪵",
    members: false,
    buyLimit: 2000,
    buyPrice: 45,
    sellPrice: 50,
    marginPostTax: 4,
    dailyVolume: 123000,
    liquidityScore: 0.91,
    volatilityScore: 0.21,
    profitMarginPercent: 9.78,
    performanceScore: 6.8,
    riskToReward: 0.021
  }
];

// Generate more mock data for the full table
export const generateMockData = (count: number): MarketItem[] => {
  const baseItems = mockMarketData;
  const result = [...baseItems];
  
  for (let i = baseItems.length; i < count; i++) {
    const baseItem = baseItems[i % baseItems.length];
    result.push({
      ...baseItem,
      id: (i + 1).toString(),
      name: `${baseItem.name} ${i + 1}`,
      buyPrice: Math.round(baseItem.buyPrice * (0.8 + Math.random() * 0.4)),
      sellPrice: Math.round(baseItem.sellPrice * (0.8 + Math.random() * 0.4)),
      performanceScore: Math.round((5 + Math.random() * 4) * 10) / 10,
      liquidityScore: Math.round((0.3 + Math.random() * 0.7) * 100) / 100,
      volatilityScore: Math.round((0.1 + Math.random() * 0.4) * 100) / 100,
      smartPriceSignal: Math.random() > 0.7
    });
  }
  
  return result;
};