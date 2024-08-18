import PhoneItem from "@/components/phone-item";
import ServiceItem from "@/components/service-item";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";
import { ChevronLeft, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function BarberShopPage({ params }: { params: { id: string } }) {
  const barbershop = await db.barberShop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return notFound();
  }

  return (
    <div className="">
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <Button
          size={"icon"}
          variant={"secondary"}
          className="absolute left-2 top-2 bg-white/80"
          asChild
        >
          <Link href="/">
            <ChevronLeft />
          </Link>
        </Button>

        <Button
          size={"icon"}
          variant={"secondary"}
          className="absolute right-2 top-2 bg-white/80"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (399 avaliações)</p>
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          Sobre nós
        </h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
          Serviços
        </h2>

        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default BarberShopPage;
