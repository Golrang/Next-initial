"use client";

import { useQuery } from "@tanstack/react-query";
import { SubscriptionPanel } from "../components";
import { getPhoto } from "../page";

export const SubscriptionPanelContainer = () => {
  const { data: result } = useQuery(["photo"], getPhoto, {
    enabled: false,
  });
  return (
    <SubscriptionPanel
      title={result.title}
      description={result.thumbnailUrl}
      image={result.url}
    />
  );
};
