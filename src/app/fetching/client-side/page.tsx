"use client";

import { useState, useEffect } from "react";

type Comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function ClientSide() {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!res.ok) throw new Error("Error with API.");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchData();
  }, []);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.email}</li>
      ))}
    </ul>
  );
}
