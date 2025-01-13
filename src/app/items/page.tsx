'use client'; //Hooks require client side rendering.

import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Item() {
  const ITEMS = [1, 2,3,4,5];
  const router = useRouter();

  // Route to home after button press.
  const RedirectToHome = () => {
    router.push("/");
  };

  const ProduceError = () => {
    router.push("/errors");
  }

  return (
    <>
      <h1>List of Items</h1>
      {ITEMS.map((id) => (
        <h2 key={id}>
          <Link href={`items/${id}`}>Item {id}</Link>
        </h2>
      ))}

      <button onClick={RedirectToHome}>Back to Home.</button>
      <br />
      <button onClick={ProduceError}>Error Demo.</button>

    </>
  );
}
