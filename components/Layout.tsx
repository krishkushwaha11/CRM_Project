import { Link, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="font-medium">
              Interaction Hub
            </Link>
          </div>
          <nav className="flex items-center space-x-4 sm:space-x-6 mx-6">
            <Link
              to="/contacts"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contacts
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-6 md:py-10">
        <Outlet />
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground md:text-base">
            &copy; {new Date().getFullYear()} Interaction Hub CRM
          </p>
        </div>
      </footer>
    </div>
  );
}