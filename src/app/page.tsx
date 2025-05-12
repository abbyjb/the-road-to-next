import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-6xl">Hello Page</h2>

      <Link href={ticketsPath()} className="text-lg underline">
        Go to Tickets
      </Link>
    </div>
  )
}

export default HomePage;