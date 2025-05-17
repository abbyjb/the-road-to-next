import Heading from "@/components/heading";
import TicketItem from "@/concepts/ticket/components/ticket_item";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading 
        title="Tickets Page" 
        description="All of your tickets in one place"
      />
      
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-from-top">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  )
}

export default TicketsPage;