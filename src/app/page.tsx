import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import { Links } from "@/components/Links";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ThemeToggle />
      <div className="mx-auto mt-5 tablet:mt-40 desktop:mt-80">
        <div className="flex flex-wrap ml-5 mr-5 desktop:ml-0 desktop:mr-0">
          <div className="mt-3 w-24 mr-20 mb-12 flex flex-wrap">
            <Logo>KGM</Logo>
            <Links />
          </div>
          <Header />
        </div>
        <Content />
      </div>
    </main>
  );
}
