import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { generateMockData } from "@/data/mockData";
import { MarketItem } from "@/types/market";
import { Search } from "lucide-react";

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

// Typed comparator function
function compareBy<T extends keyof MarketItem>(
  field: T,
  direction: 'asc' | 'desc'
) {
  return (a: MarketItem, b: MarketItem): number => {
    // Handle boolean members field explicitly
    if (field === 'members') {
      const aBool = a.members ? 1 : 0;
      const bBool = b.members ? 1 : 0;
      return direction === 'desc' ? bBool - aBool : aBool - bBool;
    }

    const aVal = a[field];
    const bVal = b[field];
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return direction === 'desc' ? bVal - aVal : aVal - bVal;
    }
    
    return direction === 'desc' 
      ? String(bVal).localeCompare(String(aVal))
      : String(aVal).localeCompare(String(bVal));
  };
}

const SortableHeader = ({ 
  children, 
  onClick, 
  sortable = true,
  active = false,
  direction = 'none',
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  sortable?: boolean;
  active?: boolean;
  direction?: 'asc' | 'desc' | 'none';
}) => (
  <TableHead 
    className={`${sortable ? 'cursor-pointer hover:text-foreground' : ''} text-xs font-medium text-muted-foreground`}
    onClick={onClick}
    aria-sort={active ? (direction === 'asc' ? 'ascending' : direction === 'desc' ? 'descending' : 'none') : 'none'}
  >
    {children}
  </TableHead>
);

const ItemRow = React.memo(({ item }: { item: MarketItem }) => {
  const isHighPerformance = item.performanceScore >= 7.5;
  const rowClass = "even:bg-muted/20 dark:even:bg-muted/5 hover:bg-muted/30";

  return (
    <TableRow className={`${rowClass} transition-colors ${isHighPerformance ? 'border-l-2 border-emerald/40' : ''}`}>
      <TableCell className="font-medium sticky left-0 bg-background">
        <div className="flex items-center gap-2">
          <span className="text-lg">{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </div>
      </TableCell>
      <TableCell>
        {item.members ? (
          <Badge variant="secondary" className="text-xs">M</Badge>
        ) : (
          <span className="text-muted-foreground">-</span>
        )}
      </TableCell>
      <TableCell className="text-right text-sm">
        {formatNumber(item.buyLimit)}
      </TableCell>
      <TableCell className="text-right text-sm font-mono">
        {formatNumber(item.buyPrice)}
      </TableCell>
      <TableCell className="text-right text-sm font-mono">
        {formatNumber(item.sellPrice)}
      </TableCell>
      <TableCell className="text-right text-sm font-mono text-emerald">
        {formatNumber(item.marginPostTax)}
      </TableCell>
      <TableCell className="text-right text-sm">
        {formatNumber(item.dailyVolume)}
      </TableCell>
      <TableCell className="text-right text-sm">
        {(item.liquidityScore * 100).toFixed(0)}%
      </TableCell>
      <TableCell className="text-right text-sm">
        {(item.volatilityScore * 100).toFixed(0)}%
      </TableCell>
      <TableCell className="text-right text-sm text-emerald font-medium">
        {item.profitMarginPercent.toFixed(2)}%
      </TableCell>
      <TableCell className="text-right text-sm font-bold text-accent">
        {item.performanceScore.toFixed(1)}
      </TableCell>
      <TableCell className="text-right text-sm">
        {item.riskToReward.toFixed(3)}
      </TableCell>
    </TableRow>
  );
});

ItemRow.displayName = 'ItemRow';

export const TopItemsTable = () => {
  const [sortField, setSortField] = useState<keyof MarketItem>('performanceScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [query, setQuery] = useState('');
  
  const allItems = useMemo(() => generateMockData(30), []);
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((i) => i.name.toLowerCase().includes(q));
  }, [allItems, query]);
  
  const sortedItems = useMemo(() => {
    const items = [...filteredItems];
    items.sort(compareBy(sortField, sortDirection));
    return items;
  }, [filteredItems, sortField, sortDirection]);

  const handleSort = (field: keyof MarketItem) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <section className="w-full py-8">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">TOP 10 OPPORTUNITIES</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search items..."
              aria-label="Search items"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 w-64 bg-background/80 backdrop-blur border border-border rounded-md focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="max-h-[600px] overflow-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-background border-b">
                <TableRow>
                  <SortableHeader onClick={() => handleSort('name')} active={sortField==='name'} direction={sortField==='name' ? sortDirection : 'none'}>
                    Item
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('members')} active={sortField==='members'} direction={sortField==='members' ? sortDirection : 'none'}>
                    Members
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('buyLimit')} active={sortField==='buyLimit'} direction={sortField==='buyLimit' ? sortDirection : 'none'}>
                    Buy Limit
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('buyPrice')} active={sortField==='buyPrice'} direction={sortField==='buyPrice' ? sortDirection : 'none'}>
                    Buy Price
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('sellPrice')} active={sortField==='sellPrice'} direction={sortField==='sellPrice' ? sortDirection : 'none'}>
                    Sell Price
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('marginPostTax')} active={sortField==='marginPostTax'} direction={sortField==='marginPostTax' ? sortDirection : 'none'}>
                    Margin (Post-Tax)
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('dailyVolume')} active={sortField==='dailyVolume'} direction={sortField==='dailyVolume' ? sortDirection : 'none'}>
                    Daily Volume
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('liquidityScore')} active={sortField==='liquidityScore'} direction={sortField==='liquidityScore' ? sortDirection : 'none'}>
                    Liquidity Score
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('volatilityScore')} active={sortField==='volatilityScore'} direction={sortField==='volatilityScore' ? sortDirection : 'none'}>
                    Volatility Score
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('profitMarginPercent')} active={sortField==='profitMarginPercent'} direction={sortField==='profitMarginPercent' ? sortDirection : 'none'}>
                    Profit Margin %
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('performanceScore')} active={sortField==='performanceScore'} direction={sortField==='performanceScore' ? sortDirection : 'none'}>
                    Performance Score
                  </SortableHeader>
                  <SortableHeader onClick={() => handleSort('riskToReward')} active={sortField==='riskToReward'} direction={sortField==='riskToReward' ? sortDirection : 'none'}>
                    R2R
                  </SortableHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedItems.slice(0, 10).map((item) => (
                  <ItemRow key={item.id} item={item} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};