import { Hydrate, dehydrate } from "@tanstack/react-query";
import { Posts } from "./containers/Posts";

import { getQueryClient } from "./provider/client";

export const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((res) => res);

export default async function Home() {
  const client = getQueryClient();
  await client.prefetchQuery(["posts"], getPosts);
  const dehydratedState = dehydrate(client);

  return (
    <Hydrate state={dehydratedState}>
      <Posts />
    </Hydrate>
  );
}
