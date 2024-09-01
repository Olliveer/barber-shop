import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant={"outline"} className="w-full font-bold">
        <Github size={18} />
      </Button>
    </form>
  );
}
