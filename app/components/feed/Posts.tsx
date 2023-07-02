"use client";

import { useQuery } from "@tanstack/react-query";
import { PostBody, PostButtons, PostHeader, PostReactions } from "../post";
import { getPosts } from "@/app/services/posts";
import { getPhotos } from "@/app/services/photos";

export const Posts = () => {
  const { data: posts, isFetching } = useQuery(["posts"], getPosts, {
    enabled: true,
  });
  const { data: photos } = useQuery(["post"], getPhotos, {
    enabled: true,
  });

  const postsPhotoAttached = posts?.map((item, index) => ({
    ...item,
    photo: photos?.[index].url,
  }));
  console.log("first", postsPhotoAttached);

  return (
    <>
      <section className="pr-3 pl-3">
        {postsPhotoAttached?.map((post: any) => {
          return (
            <div className="bg-gray-300 w-full h-auto dark:bg-slate-50 p-6 rounded mb-3">
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
