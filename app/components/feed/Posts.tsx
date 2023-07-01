"use client";

import { useQuery } from "@tanstack/react-query";

export const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => res);

export const Posts = () => {
  const { data: posts } = useQuery<{ title: string }[]>(["posts"], getPosts, {
    enabled: false,
  });

  console.log("first", posts);

  return (
    <>
      <section>
        {posts?.map((post) => {
          return <div>{post.title}</div>;
        })}
      </section>
    </>
  );
};
