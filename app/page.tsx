import BarberShopItem from "@/components/barbershop-item";
import BookingItem from "@/components/booking-item";
import Header from "@/components/header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { db } from "@/lib/prisma";
import { PlusIcon, SearchIcon } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const barbershops = await db.barberShop.findMany();

  const popularBabershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
    take: 6,
  });

  return (
    <main>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, nome_user</h2>
        <p>
          {Intl.DateTimeFormat("pt-BR", {
            dateStyle: "full",
          }).format(new Date())}
        </p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça uma busca" />
          <Button variant="outline">
            <SearchIcon />
          </Button>
        </div>

        {/* TODO: add right icons */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-1">
            <Image
              src={"/scissors.svg"}
              alt="Scissors"
              width={16}
              height={16}
              className="fill-current text-gray-400"
            />
            Corte Cabelo
          </Button>
          <Button className="gap-1">
            <PlusIcon size={16} />
            Barba
          </Button>
          <Button className="gap-1">
            <PlusIcon size={16} />
            Acabamento
          </Button>
          <Button className="gap-1">
            <PlusIcon size={16} />
            Acabamento
          </Button>
          <Button className="gap-1">
            <PlusIcon size={16} />
            Acabamento
          </Button>
          <Button className="gap-1">
            <PlusIcon size={16} />
            Acabamento
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/barber-banner-placeholder.svg"
            alt="Agende nos melhores"
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <BookingItem />

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBabershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              Criado por <strong>USER_NAME</strong>
            </p>
          </CardContent>
        </Card>
      </footer>
    </main>
  );
}
