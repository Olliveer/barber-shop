import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

// TODO: RECEIVE BOOKING FROM PROPS
function BookingItem() {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge className="w-fit">confirmado</Badge>
          <h3 className="font-semibold">Corte de cabelo</h3>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png"
                alt="Barber"
              />
            </Avatar>
            <p className="text-sm">Barbearia Elegance</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
          <p className="text-sm">Agosto</p>
          <p className="text-2xl">05</p>
          <p className="text-sm">20:00</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default BookingItem;
