import React from "react";

import { Hydrate, dehydrate } from "@tanstack/react-query";
import { ProfilePanelContainer } from "./containers/Profile";
import { SubscriptionPanelContainer } from "./containers/Subscription";
import { getQueryClient } from "./provider/client";

export const getUser = () =>
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((res) => res);

export const getPhoto = () =>
  fetch("https://jsonplaceholder.typicode.com/photos/1")
    .then((res) => res.json())
    .then((res) => res);

const Home = async () => {
  const client = getQueryClient();
  await client.prefetchQuery(["user"], getUser);
  await client.prefetchQuery(["photo"], getPhoto);
  const dehydratedState = dehydrate(client);

  return (
    <Hydrate state={dehydratedState}>
      <div className=" grid grid-cols-4 p-6">
        <div className="col-span-1">
          <ProfilePanelContainer />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1  flex flex-col">
          <div className="flex flex-col w-full h-80" />
          <SubscriptionPanelContainer />
        </div>
      </div>
    </Hydrate>
  );
};

export default Home;

// export const getData = async (url: string) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };
