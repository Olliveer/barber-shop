import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import SidebarButton from "./sidebar-button";

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

        <SidebarButton />
      </CardContent>
    </Card>
  );
}

export default Header;
