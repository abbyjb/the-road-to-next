import Link from 'next/link';
import Placeholder from '@/components/placeholder';
import { buttonVariants } from '@/components/ui/button';
import TicketItem from '@/concepts/ticket/components/ticket_item';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId)

  if (!ticket) {
    return <Placeholder 
      label="Ticket not found" 
      button={
        <Link
        href={ticketsPath()}
        className={buttonVariants({variant: "outline"})}
        >
          Go to Tickets
        </Link>
      } />
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isTicketPage />
    </div>
  )
}

export default TicketPage;