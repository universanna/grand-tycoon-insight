import { Wind, Circle, Feather, Droplet, Skull, Zap, Droplets, Scale, Leaf } from 'lucide-react';

interface TableRow {
  icon: React.ComponentType<{ className?: string }>;
  item: string;
  members: string;
  buyLimit: string;
  buyPrice: number;
  sellPrice: number;
  margin: number;
  dailyVolume: string;
  liquidityScore: string;
  volatilityScore: string;
}

const tableData: TableRow[] = [
  {
    icon: Wind,
    item: "Air rune",
    members: "-",
    buyLimit: "50,000",
    buyPrice: 6,
    sellPrice: 5,
    margin: 1,
    dailyVolume: "310,764,425",
    liquidityScore: "90%",
    volatilityScore: "11%"
  },
  {
    icon: Circle,
    item: "Pure essence",
    members: "-",
    buyLimit: "30,000",
    buyPrice: 2,
    sellPrice: 2,
    margin: 0,
    dailyVolume: "192,130,059",
    liquidityScore: "88%",
    volatilityScore: "10%"
  },
  {
    icon: Feather,
    item: "Feather",
    members: "-",
    buyLimit: "30,000",
    buyPrice: 3,
    sellPrice: 2,
    margin: 1,
    dailyVolume: "185,537,640",
    liquidityScore: "86%",
    volatilityScore: "14%"
  },
  {
    icon: Droplet,
    item: "Blood rune",
    members: "M",
    buyLimit: "25,000",
    buyPrice: 206,
    sellPrice: 204,
    margin: 2,
    dailyVolume: "180,877,658",
    liquidityScore: "82%",
    volatilityScore: "15%"
  },
  {
    icon: Skull,
    item: "Death rune",
    members: "-",
    buyLimit: "25,000",
    buyPrice: 144,
    sellPrice: 142,
    margin: 2,
    dailyVolume: "140,393,970",
    liquidityScore: "80%",
    volatilityScore: "16%"
  },
  {
    icon: Zap,
    item: "Chaos rune",
    members: "-",
    buyLimit: "18,000",
    buyPrice: 68,
    sellPrice: 65,
    margin: 3,
    dailyVolume: "137,524,292",
    liquidityScore: "78%",
    volatilityScore: "18%"
  },
  {
    icon: Droplets,
    item: "Water rune",
    members: "-",
    buyLimit: "50,000",
    buyPrice: 5,
    sellPrice: 4,
    margin: 1,
    dailyVolume: "127,329,577",
    liquidityScore: "92%",
    volatilityScore: "9%"
  },
  {
    icon: Scale,
    item: "Zulrah's scales",
    members: "M",
    buyLimit: "30,000",
    buyPrice: 203,
    sellPrice: 196,
    margin: 7,
    dailyVolume: "107,394,154",
    liquidityScore: "75%",
    volatilityScore: "24%"
  },
  {
    icon: Leaf,
    item: "Nature rune",
    members: "-",
    buyLimit: "18,000",
    buyPrice: 90,
    sellPrice: 88,
    margin: 2,
    dailyVolume: "107,011,313",
    liquidityScore: "84%",
    volatilityScore: "17%"
  }
];

const getMarginColor = (margin: number) => {
  if (margin === 0) return "text-gray-400";
  if (margin <= 2) return "text-green-400";
  if (margin <= 5) return "text-yellow-400";
  return "text-red-400";
};

export default function TradingTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px]">
        <table className="w-full border-collapse">
          {/* Sticky Header */}
          <thead className="sticky top-0 z-20">
            <tr className="border-b border-gray-700">
              <th className="sticky left-0 z-30 text-left px-4 py-3 text-gray-300 font-medium min-w-[200px]">
                Item
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[100px]">
                Members
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[120px]">
                Buy Limit
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[100px]">
                Buy Price
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[100px]">
                Sell Price
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[120px]">
                Margin (Post-Tax)
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[140px]">
                Daily Volume
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[120px]">
                Liquidity Score
              </th>
              <th className="text-center px-4 py-3 text-gray-300 font-medium min-w-[120px]">
                Volatility Score
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={row.item}
                className={`border-b border-gray-800 hover:bg-gray-800/50 ${
                  index % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-900/20'
                }`}
              >
                {/* Sticky Item Column */}
                <td className="sticky left-0 z-10 bg-inherit px-4 py-3 min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <row.icon className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-200 font-medium">{row.item}</span>
                  </div>
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.members}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.buyLimit}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.buyPrice}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.sellPrice}
                </td>

                <td className={`text-center px-4 py-3 font-medium ${getMarginColor(row.margin)}`}>
                  {row.margin}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.dailyVolume}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.liquidityScore}
                </td>

                <td className="text-center px-4 py-3 text-gray-300">
                  {row.volatilityScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
