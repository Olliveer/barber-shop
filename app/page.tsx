import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, nome_user</h2>
        <p>
          {Intl.DateTimeFormat("pt-BR", {
            dateStyle: "full",
          }).format(new Date())}{" "}
        </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça uma busca" />
          <Button variant="outline" size={"icon"}>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/barber-banner-placeholder.svg"
            alt="Agende nos melhores"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
