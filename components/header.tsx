import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import SidebarButton from "./sidebar-button";
import Link from "next/link";

function Header() {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href={"/"}>
          <Image
            src="/barber-placeholder.svg"
            alt="Barber Shop"
            width={120}
            height={18}
          />
        </Link>
        <SidebarButton />
      </CardContent>
    </Card>
  );
}

export default Header;
