import Link from "next/link";

export default function Feed() {
    return (
        <>
            <h1>Feed</h1>
            <h5>Intercept Route Demo</h5>
            <div>
                <Link href='/feed/photo'>See Photo</Link>
            </div>
        </>
    );
}