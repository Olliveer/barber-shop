import { auth } from "@/auth";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { LogInIcon } from "lucide-react";
import { Button } from "./ui/button";
import SignIn from "./sign-in";

async function UserInfo() {
  const session = await auth();

  // if (!session?.user) return null;

  return (
    <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
      {!session?.user && (
        <>
          <h2 className="font-bold">Olá, faça seu login!</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"}>
                <LogInIcon size={18} />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="w-[90%]"
              aria-describedby="
              Faça login na plataforma para acessar todos os recursos disponíveis.
           "
            >
              <DialogHeader>
                <DialogTitle>Faça login na plataforma</DialogTitle>
                <DialogDescription
                  aria-describedby="
                  Conecte-se para acessar todos os recursos da plataforma.
                "
                >
                  Conecte-se para acessar todos os recursos da plataforma.
                </DialogDescription>
              </DialogHeader>
              <SignIn />
            </DialogContent>
          </Dialog>
        </>
      )}

      {session?.user && (
        <>
          <Avatar>
            <AvatarImage src={session.user.image!} alt={session.user.name!} />
          </Avatar>

          <div className="">
            <p className="font-bold">{session.user.name}</p>
            <p className="text-xs">{session.user.email}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
