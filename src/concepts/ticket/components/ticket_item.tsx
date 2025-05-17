import clsx from 'clsx';
import { LucideSquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from  "../types";

type TicketItemProps = {
  ticket: Ticket;
  isTicketPage?: boolean;
}

const TicketItem = ({ ticket, isTicketPage = false }: TicketItemProps ) => {

  const viewTicketButton = (
    <Button variant="outline" asChild size="icon">
      <Link href={ticketPath(ticket.id)} className="text-sm underline">
        <LucideSquareArrowOutUpRight className="w-4 h-4" />
      </Link>
    </Button>
  );


  return (
    <div className={clsx("w-full flex gap-x-1", {
      "max-w-[580px]": isTicketPage,
      "max-w-[420px]": !isTicketPage
    })}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex gap-x-2 items-center">
            <span>{TICKET_ICONS[ticket.status]}</span>
            <span className="truncate">{ticket.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <span className={clsx("whitespace-break-spaces", {
            "line-clamp-3": !isTicketPage
          })}>
            {ticket.content}
          </span>
        </CardContent>
      </Card>

      {isTicketPage ? null : (
        <div className="flex flex-col gap-y-1">
          {viewTicketButton}
        </div>
      )}
    </div>
  );
  
};

export default TicketItem;