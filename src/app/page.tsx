import { Content } from "@/components/Content";
import { Header } from "@/components/Header";
import { Github } from "@/components/img/Github";
import { LinkedIn } from "@/components/img/LinkedIn";
import { Mail } from "@/components/img/Mail";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const iconClass =
    "w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125";

  return (
    <main className="flex flex-col">
      <ThemeToggle />
      <div className="mx-auto mt-5 tablet:mt-40 desktop:mt-80">
        <div className="flex flex-wrap ml-5 mr-5 desktop:ml-0 desktop:mr-0">
          <div className="mt-3 w-24 mr-20 mb-12 flex flex-wrap">
            <Logo>KGM</Logo>
            <div className="flex flex-wrap mx-auto mt-3 space-x-3">
              <Mail className={iconClass} />
              <LinkedIn className={iconClass} />
              <Github className={iconClass} />
            </div>
          </div>
          <Header />
        </div>
        <Content />
      </div>
    </main>
  );
}
