import { signOut } from "@/auth.ts";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" className="justify-start gap-2" variant={"ghost"}>
        <LogOutIcon size={18} />
        Logout
      </Button>
    </form>
  );
}
