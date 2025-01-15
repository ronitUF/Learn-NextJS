import Link from "next/link";

export default function Fetching() {
  return (
    <div>
      <h2>
        <Link href="fetching/client-side">Client Side Data Fetching</Link>
      </h2>
      <h2>
        <Link href="fetching/server-side">Server Side Data Fetching</Link>
      </h2>
    </div>
  );
}
