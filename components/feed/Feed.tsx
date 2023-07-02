import { dehydrate, Hydrate } from "@tanstack/react-query";
import { AddPost } from "./AddPost";
import { Posts } from "./Posts";
import { getPosts } from "@/services/posts";
import { getQueryClient } from "@/provider/client";
import { getPhotos } from "@/services/photos";

// const getPosts = () =>
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((res) => res);

export const Feed = async () => {
  const client = getQueryClient();
  await client.prefetchQuery(["posts"], getPosts);
  await client.prefetchQuery(["photos", getPhotos]);
  const dehydratedState = dehydrate(client);

  return (
    <Hydrate state={dehydratedState}>
      <div>
        <AddPost />
        <Posts />
      </div>
    </Hydrate>
  );
};
