import { SubscriptionPanel } from "@/app/components";
import React from "react";

const Page = () => {
  return (
    <div className=" grid grid-cols-4 p-6">
      <div className="col-span-1"></div>
      <div className="col-span-2"></div>
      <div className="col-span-1  flex flex-col">
        <div className="flex flex-col w-full h-80" />
        <SubscriptionPanel
          title="Title"
          description="Description"
          image="sdfsdf"
        />
      </div>
    </div>
  );
};

export default Page;
