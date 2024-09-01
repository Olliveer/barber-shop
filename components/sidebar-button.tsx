import { CalendarIcon, HomeIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import Link from "next/link";
import { quickSearchOptions } from "@/lib/constants";
import Image from "next/image";
import { ModeToggle } from "./dark-theme-toggle";

import UserInfo from "./user-information";
import { SignOut } from "./signout-button";

type Props = {
  isAbsolute?: boolean;
};

function SidebarButton({ isAbsolute = false }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className={`${
            isAbsolute ? "absolute right-2 top-2" : ""
          } bg-white dark:bg-black`}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <UserInfo />

        <div className="flex flex-col gap-2 border-b border-solid p-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant={"ghost"} asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Inicio
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant={"ghost"}>
            <CalendarIcon size={18} />
            Agenda
          </Button>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid p-5">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant={"ghost"}
            >
              <Image
                src={option.imageUrl}
                width={18}
                height={18}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-5">
          <SignOut />
        </div>

        <div className="bottom-0 flex items-center justify-end">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarButton;
