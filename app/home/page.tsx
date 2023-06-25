import { SubscriptionPanel } from "@/app/components";
import React from "react";
import { ProfilePanel } from "../components/profile-panel";

const Page = () => {
  return (
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
  );
};

export default Page;

const SubscriptionPanelContainer = async () => {
  const result = await getData("https://jsonplaceholder.typicode.com/photos/1");

  return (
    <SubscriptionPanel
      title={result.title}
      description={result.thumbnailUrl}
      image={result.url}
    />
  );
};

const ProfilePanelContainer = async () => {
  const result = await getData("https://jsonplaceholder.typicode.com/users/1");

  return (
    <ProfilePanel
      name={result.name}
      position={result.email}
      number_of_visit={result.company.name.length}
      number_of_impression={result.phone.length}
      my_items={result.website}
    />
  );
};

export const getData = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
