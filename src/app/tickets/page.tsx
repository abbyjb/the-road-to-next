"use client";

import { useEffect,useState } from "react";
import Heading from "@/components/heading";
import TicketItem from "@/concepts/ticket/components/ticket_item";
import { getTickets } from "@/concepts/ticket/queries/get_tickets";
import { Ticket } from "@/concepts/ticket/types";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();

      setTickets(result);
    };

    fetchTickets();

  }, []);

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading 
        title="Tickets Page" 
        description="All of your tickets in one place"
      />
      
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  )
}

export default TicketsPage;