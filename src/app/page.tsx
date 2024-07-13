import { Companies } from "@/components/companies";
import { Header } from "@/components/header";
import { Links } from "@/components/links";
import { ThemeToggle } from "@/components/themeToggle";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <ThemeToggle />
      <div className="m-auto">
        <div className="flex flex-wrap">
          <Links />
          <Header />
        </div>
        <Companies />
      </div>
    </main>
  );
}
