import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { quickSearchOptions } from "@/lib/constants";
import Image from "next/image";

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
          } bg-white/80`}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src="/avatar-placeholder.png" alt="User" />
          </Avatar>

          <div className="">
            <p className="font-bold">John Doe</p>
            <p className="text-xs">john@mail.com</p>
          </div>
        </div>

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
          <Button className="justify-start gap-2" variant={"ghost"}>
            <LogOutIcon size={18} />
            Logout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarButton;
