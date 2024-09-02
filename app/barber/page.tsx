import BarberShopItem from "@/components/barbershop-item";
import Header from "@/components/header";
import Search from "@/components/search";
import { db } from "@/lib/prisma";

type BarberShopsProps = {
  searchParams: {
    search?: string;
  };
};

async function BarberShops({ searchParams }: BarberShopsProps) {
  const barberShops = await db.barberShop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <div className="">
      <Header />
      <div className="my-6 px-4">
        <Search />
      </div>
      <div className="px-4">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h2>

        <div className="grid grid-cols-2 gap-1">
          {barberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barbershop={barberShop} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BarberShops;
