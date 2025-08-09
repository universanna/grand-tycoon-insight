export const Footer = () => {
  return <footer className="border-t bg-background py-6 mt-auto">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="text-sm font-medium bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent opacity-75">
              RuneTycoon
            </div>
            <span className="text-sm text-muted-foreground">© PromptLoaf</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>;
};