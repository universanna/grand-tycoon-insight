import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Controls } from "@/components/Controls";
import { TopOpportunities } from "@/components/TopOpportunities";
import { TopItemsTable } from "@/components/TopItemsTable";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Controls />
        <TopOpportunities />
        <TopItemsTable />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
