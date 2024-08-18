"use client";

import { CopyIcon, SmartphoneIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

import { Button } from "./ui/button";

function PhoneItem({ phone }: { phone: string }) {
  function handleCopyPhone(phone: string) {
    navigator.clipboard.writeText(phone);
    toast.success("Phone number copied to clipboard");
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>

      <Button
        variant={"outline"}
        size={"sm"}
        onClick={() => handleCopyPhone(phone)}
      >
        <CopyIcon size={16} />
      </Button>
    </div>
  );
}

export default PhoneItem;
