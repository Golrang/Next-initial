import { QueryKey } from "@tanstack/react-query";

type TPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export const getPhoto = () =>
  fetch(`https://jsonplaceholder.typicode.com/photos/1`).then((res) =>
    res.json()
  );

export const getPhotos = (): Promise<TPhoto[]> =>
  fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
