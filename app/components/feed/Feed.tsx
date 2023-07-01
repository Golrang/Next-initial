import { getQueryClient } from "@/app/provider/client";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { Posts } from "./Posts";

const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => res);

export const Feed = async () => {
  const client = getQueryClient();
  await client.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(client);

  return (
    <Hydrate state={dehydratedState}>
      <div>
        <input type="text" />
        <hr />
        <Posts />
      </div>
    </Hydrate>
  );
};
