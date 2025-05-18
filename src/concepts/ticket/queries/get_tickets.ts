import { initialTickets } from '@/data';
import { Ticket } from '../types';

export const getTickets = async (): Promise<Ticket[]> => {
  // simulates a request to the server to get tickets.
  // will remove later once we set up a database.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialTickets);
  });
}