import { BarberShop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

type BarberShopItemProps = {
  barbershop: BarberShop;
};

function BarberShopItem({ barbershop }: BarberShopItemProps) {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        <div className="relative h-[159px] w-full">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <Badge
            className="absolute left-2 top-2 gap-1 bg-white"
            variant={"secondary"}
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold dark:text-black">5,0</p>
          </Badge>
        </div>

        <div className="px-1 pb-3">
          <h3 className="truncate py-3 font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>

          <Button variant={"secondary"} className="mt-3 w-full" asChild>
            <Link href={`/barber/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default BarberShopItem;
