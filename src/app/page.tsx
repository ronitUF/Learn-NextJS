import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "0 auto",
          justifyItems: "center",
        }}
      >
        <h1>Homepage</h1>
        <h2>
          <Link href="/login">Login</Link>
        </h2>
        <h2>
          <Link href="/register">Register</Link>
        </h2>
        <h2>
          <Link href="/items">Go to Items</Link>
        </h2>
        <h2>
          <Link href="/feed">Feed</Link>
        </h2>
      </div>
    </>
  );
}
