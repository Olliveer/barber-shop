import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          src="/barber-placeholder.svg"
          alt="Barber Shop"
          width={120}
          height={18}
        />

        <Button size={"icon"} variant={"outline"}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Header;
