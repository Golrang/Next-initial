"use client";
import { useQuery } from "@tanstack/react-query";

import { getPosts } from "../page";

export const Posts = () => {
  const { data } = useQuery(["posts"], getPosts, {
    enabled: false,
  });

  return (
    <div>
      {data?.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
};
