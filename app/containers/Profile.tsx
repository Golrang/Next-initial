"use client";

import { useQuery } from "@tanstack/react-query";
import { ProfilePanel } from "../components/profile-panel";
import { getUser } from "../page";

export const ProfilePanelContainer = async () => {
  const { data: result } = useQuery(["user"], getUser, {
    enabled: false,
  });

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
