"use client";

import {useQuery} from "@tanstack/react-query";
import {Post, PostBody, PostButtons, PostHeader, PostReactions} from "../post";

export const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => res);

export const Posts = () => {
  const {data: posts} = useQuery<{title: string}[]>(["posts"], getPosts, {
    enabled: false,
  });

  console.log("first", posts);

  return (
    <>
      <section>
        {posts?.map((post: any) => {
          return (
            <div className="bg-gray-300 w-full h-auto dark:bg-slate-50 p-6 rounded">
              {/* <PostHeader PostUser={User} /> */}
              <PostBody post={post} />
              {/* <PostReactions PostUser={User} /> */}
              <PostButtons />
            </div>
          );
        })}
      </section>
    </>
  );
};
