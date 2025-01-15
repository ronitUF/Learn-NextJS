/*

In Next.js 13 and newer (with the introduction of the App Router), the recommended way to preload 
and fetch data for server-side rendering (similar to getStaticProps or getServerSideProps in the Pages Router)
is to use Server Components and async functions in React components.

This example demostrates getStaticProps() and fetch inside it, pre rendering behvaiour
using fetch + server component.
*/

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function ServerSide() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    if (!response.ok) throw new Error("Error fetching data.");
    const comments: Comments[] = await response.json();
    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.email}</li>
        ))}
      </ul>
    );
  } catch (err) {
    console.log(err);
  }
}
