import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="text-6xl">Tickets Page</h2>

      {initialTickets.map((ticket) => (
        <div key={ticket.id}>
          <h2 className="text-3xl">{ticket.title}</h2>

          <Link href={ticketPath(ticket.id)} className="text-lg underline">
            View
          </Link>
        </div>

      ))}
    </div>
  )
}

export default TicketsPage;