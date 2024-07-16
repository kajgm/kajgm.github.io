import { Content } from "@/components/content";
import { Header } from "@/components/header";
import { Links } from "@/components/links";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/themeToggle";

export default function Home() {
  return (
    <main className="flex flex-col">
      <ThemeToggle />
      <div className="mx-auto mt-10 mobile:mt-20 tablet:mt-40 desktop:mt-80">
        <div className="flex flex-wrap ml-8 desktop:ml-0">
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
